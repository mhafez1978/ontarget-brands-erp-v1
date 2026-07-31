"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState, useEffect, useCallback, useMemo } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  differenceInMinutes,
  parseISO,
  isValid,
  setHours,
  setMinutes,
  setSeconds,
  addDays,
} from "date-fns";
import {
  Clock,
  LogIn,
  LogOut,
  Save,
  X,
  Trash2,
} from "lucide-react";

// --- TYPE DEFINITIONS ---
type TimeEntry = {
  id: string;
  startTime: string;
  endTime?: string;
  duration?: number;
  description?: string;
};

type EntryMap = Record<string, TimeEntry[]>;

const EditEntryModal = ({
  entry,
  onSave,
  onClose,
  onDelete,
}: {
  entry: TimeEntry;
  onSave: (updatedEntry: TimeEntry) => Promise<void>;
  onClose: () => void;
  onDelete: (entryId: string) => Promise<void>;
}) => {
  const [startTime, setStartTime] = useState(
    entry.startTime ? format(parseISO(entry.startTime), "HH:mm") : ""
  );
  const [endTime, setEndTime] = useState(
    entry.endTime ? format(parseISO(entry.endTime), "HH:mm") : ""
  );
  const [localError, setLocalError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleSave = async () => {
    setLocalError(null);
    setIsProcessing(true);
    try {
      const baseDate = parseISO(entry.startTime);
      if (!isValid(baseDate))
        throw new Error("Invalid base date for the entry.");

      const [startHour, startMinute] = startTime.split(":").map(Number);
      const startDateTime = setSeconds(
        setMinutes(setHours(baseDate, startHour), startMinute),
        0
      );

      let endDateTime: Date | undefined;
      if (endTime) {
        const [endHour, endMinute] = endTime.split(":").map(Number);
        endDateTime = setSeconds(
          setMinutes(setHours(baseDate, endHour), endMinute),
          0
        );
        if (endDateTime < startDateTime) {
          endDateTime = addDays(endDateTime, 1);
        }
      }

      if (!isValid(startDateTime) || (endTime && !isValid(endDateTime))) {
        throw new Error("Invalid time format entered.");
      }

      const duration = endDateTime
        ? differenceInMinutes(endDateTime, startDateTime)
        : 0;
      await onSave({
        ...entry,
        startTime: startDateTime.toISOString(),
        endTime: endDateTime?.toISOString(),
        duration,
      });
      onClose();
    } catch (error) {
      setLocalError(
        error instanceof Error ? error.message : "Failed to save."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDelete = async () => {
    setIsProcessing(true);
    try {
      await onDelete(entry.id);
    } catch {
      setLocalError("Failed to delete entry.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-3 border-t pt-4 mt-4">
      {showConfirmDelete ? (
        <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-lg">
          <p className="text-sm font-medium mb-2">Are you sure?</p>
          <div className="flex justify-end gap-2">
            <button
              className="px-3 py-1 text-sm rounded-md"
              onClick={() => setShowConfirmDelete(false)}
              disabled={isProcessing}
            >
              Cancel
            </button>
            <button
              className="bg-red-600 text-white px-4 py-1 rounded-md flex items-center gap-1.5 text-sm"
              onClick={handleDelete}
              disabled={isProcessing}
            >
              <Trash2 className="w-4 h-4" />
              {isProcessing ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      ) : (
        <>
          {localError && (
            <div className="bg-red-100 text-red-700 p-2 rounded text-sm">
              {localError}
            </div>
          )}
          <div className="flex gap-3 items-center">
            <label className="text-sm font-medium w-16 shrink-0">Start:</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="border p-1.5 rounded-md w-full"
              disabled={isProcessing}
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="text-sm font-medium w-16 shrink-0">End:</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="border p-1.5 rounded-md w-full"
              disabled={isProcessing}
            />
          </div>
          <div className="flex justify-between items-center pt-2">
            <button
              className="flex items-center gap-1.5 text-red-600 font-medium"
              onClick={() => setShowConfirmDelete(true)}
              disabled={isProcessing}
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
            <div className="flex gap-2">
              <button
                className="px-4 py-1.5 rounded-md"
                onClick={onClose}
                disabled={isProcessing}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-1.5 rounded-md flex items-center gap-1.5"
                onClick={handleSave}
                disabled={isProcessing}
              >
                <Save className="w-4 h-4" />
                {isProcessing ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const TimeEntryForm = () => {
  const { data: session, status } = useSession();
  const [entryMap, setEntryMap] = useState<EntryMap>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMutating, setIsMutating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const today = useMemo(() => new Date(), []);

  if (
    status === "unauthenticated" ||
    (session && !["MANAGER", "STAFF", "ADMIN"].includes(session.user.role))
  ) {
    redirect("/auth");
  }

  const currentMonthStart = startOfMonth(today);
  const calendarStart = startOfWeek(currentMonthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(endOfMonth(today), { weekStartsOn: 1 });
  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const fetchEntries = useCallback(
    async (signal?: AbortSignal) => {
      if (!session?.user?.id) return;
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `/api/time-mgmt?userId=${session.user.id}&companyId=${
            session.user.company?.id
          }&month=${format(today, "yyyy-MM")}`,
          { cache: "no-store", signal }
        );
        if (!res.ok) throw new Error("Failed to fetch entries");
        const data: TimeEntry[] = await res.json();
        const newEntryMap: EntryMap = {};
        for (const entry of data) {
          const startDate = parseISO(entry.startTime);
          if (isValid(startDate)) {
            const key = format(startDate, "yyyy-MM-dd");
            if (!newEntryMap[key]) newEntryMap[key] = [];
            newEntryMap[key].push({
              ...entry,
              duration: entry.endTime
                ? differenceInMinutes(parseISO(entry.endTime), startDate)
                : 0,
            });
          }
        }
        setEntryMap(newEntryMap);
      } catch (err) {
        const name = err instanceof Error ? err.name : "";
        if (name !== "AbortError") setError("Failed to load time entries.");
      } finally {
        setIsLoading(false);
      }
    },
    [session, today]
  );

  useEffect(() => {
    if (status !== "authenticated") return;
    const controller = new AbortController();
    // Defer to a microtask so the loading flag isn't set synchronously
    // during the effect (which would cause a cascading render).
    queueMicrotask(() => void fetchEntries(controller.signal));
    return () => controller.abort();
  }, [status, fetchEntries]);

  const runMutation = useCallback(
    async (action: () => Promise<Response>) => {
      setIsMutating(true);
      setError(null);
      try {
        const res = await action();
        if (!res.ok)
          throw new Error((await res.json()).message || "Action failed");
        await fetchEntries();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Action failed");
        throw err; // re-throw to be caught by caller if needed
      } finally {
        setIsMutating(false);
      }
    },
    [fetchEntries]
  );

  const handleClockIn = () =>
    runMutation(() =>
      fetch("/api/time-mgmt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: session!.user.id,
          companyId: session!.user.company!.id,
          startTime: new Date().toISOString(),
        }),
      })
    );

  const handleClockOut = (date: Date) => {
    const key = format(date, "yyyy-MM-dd");
    const openEntry = (entryMap[key] || []).find((e) => !e.endTime);
    if (!openEntry) return setError("No open time entry found.");
    runMutation(() =>
      fetch(`/api/time-mgmt/${openEntry.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endTime: new Date().toISOString() }),
      })
    );
  };

  const handleSaveEdit = (updated: TimeEntry) =>
    runMutation(() =>
      fetch(`/api/time-mgmt/${updated.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      })
    );

  const handleDelete = async (entryId: string) => {
    const entryDateKey = selectedDate
      ? format(selectedDate, "yyyy-MM-dd")
      : null;
    const isLastEntryOnDay = entryDateKey
      ? (entryMap[entryDateKey] || []).length === 1
      : false;

    await runMutation(() =>
      fetch(`/api/time-mgmt/${entryId}`, { method: "DELETE" })
    );

    if (isLastEntryOnDay) {
      setSelectedDate(null);
    }
  };

  const getDayEntries = (day: Date) =>
    entryMap[format(day, "yyyy-MM-dd")] || [];
  const getDayTotalMinutes = (day: Date) =>
    getDayEntries(day).reduce((acc, e) => acc + (e.duration || 0), 0);
  const getWeekTotalMinutes = (weekDays: Date[]) =>
    weekDays.reduce((sum, day) => sum + getDayTotalMinutes(day), 0);

  if (status === "loading" || isLoading) {
    return (
      <div className="p-10 text-center font-medium text-gray-500">
        Loading Timecard...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <Clock className="w-6 h-6" /> Timecard for {format(today, "MMMM yyyy")}
      </h2>
      {error && (
        <div className="bg-red-100 border-red-400 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-7 text-center font-bold text-gray-600 border-b-2 pb-2 bg-gray-50 sticky top-0 z-10">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div key={d} className="py-2">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 divide-y-2">
        {Array.from({ length: Math.ceil(calendarDays.length / 7) }).map(
          (_, weekIndex) => {
            const weekStartIdx = weekIndex * 7;
            const weekDays = calendarDays.slice(weekStartIdx, weekStartIdx + 7);
            const totalMins = getWeekTotalMinutes(weekDays);
            return (
              <div key={`week-${weekIndex}`} className="pt-1">
                <div className="grid grid-cols-7">
                  {weekDays.map((day) => {
                    const dayEntries = getDayEntries(day);
                    const totalDayMins = getDayTotalMinutes(day);
                    const hasOpen = dayEntries.some((e) => !e.endTime);
                    const isCurrentMonth = isSameMonth(day, today);
                    return (
                      <div
                        key={day.toString()}
                        className={`border-l border-b p-2 flex flex-col items-center justify-between gap-3 min-h-[120px] transition-colors ${
                          !isCurrentMonth ? "bg-gray-50 text-gray-400" : ""
                        } ${
                          isSameDay(day, today)
                            ? "bg-amber-100 border-emerald-500 ring-2 ring-blue-200 z-50"
                            : "hover:bg-gray-100"
                        } ${day.getDay() === 1 ? "border-l-0" : ""}`}
                      >
                        <span className="font-medium self-start">
                          {format(day, "d")}
                        </span>
                        {dayEntries.length > 0 && (
                          <button
                            className="text-sm text-blue-600 font-semibold hover:underline"
                            onClick={() => setSelectedDate(day)}
                          >
                            View Entries
                          </button>
                        )}
                        {hasOpen ? (
                          <button
                            className="w-full mt-auto flex items-center justify-center gap-1.5 text-red-600 bg-red-100 hover:bg-red-200 disabled:opacity-50 p-2 rounded-md text-sm font-semibold"
                            onClick={() => handleClockOut(day)}
                            disabled={isMutating}
                          >
                            <LogOut className="w-4 h-4" /> Clock Out
                          </button>
                        ) : (
                          <button
                            className="w-full mt-auto flex items-center justify-center gap-1.5 text-green-600 bg-green-100 hover:bg-green-200 disabled:opacity-50 p-2 rounded-md text-sm font-semibold"
                            onClick={() => handleClockIn()}
                            disabled={isMutating || !isCurrentMonth}
                          >
                            <LogIn className="w-4 h-4" /> Clock In
                          </button>
                        )}
                        {totalDayMins > 0 && (
                          <span className="text-xs font-bold text-gray-800 bg-gray-200 px-2 py-1 rounded-full">
                            {Math.floor(totalDayMins / 60)}h {totalDayMins % 60}
                            m
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
                {totalMins > 0 && (
                  <div className="text-right text-sm font-bold text-blue-700 pr-2 py-1 bg-blue-50">
                    Week Total: {Math.floor(totalMins / 60)}h {totalMins % 60}m
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>

      {selectedDate && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-xl font-semibold">
                Entries for {format(selectedDate, "PPP")}
              </h3>
              <button
                className="text-gray-400"
                onClick={() => setSelectedDate(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-4">
              {getDayEntries(selectedDate).length === 0 ? (
                <p className="text-center py-5">No entries for this date.</p>
              ) : (
                getDayEntries(selectedDate)
                  .sort((a, b) => a.startTime.localeCompare(b.startTime))
                  .map((entry) => (
                    <EditEntryModal
                      key={entry.id}
                      entry={entry}
                      onSave={handleSaveEdit}
                      onDelete={handleDelete}
                      onClose={() => setSelectedDate(null)}
                    />
                  ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
