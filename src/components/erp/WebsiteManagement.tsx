"use client";
import React from "react";
import { OffCanvasBtn } from "../OffCanvasBtn";
import { CreateCustomerLandingContent } from "../forms/CreateCustomerLandingContent";
//import { ConfigureDomainForm } from "../forms/ConfigureDomainForm";
//import { ConfigureSMTPForm } from "../forms/ConfigureSMTPForm";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ConfigureSMTPForm } from "../forms/ConfigureSMTPForm";
import { ConfigureDomainForm } from "../forms/ConfigureDomainForm";
import { DomainInstructions } from "./DomainInstructions";

export const WebsiteManagement = () => {
  const isDisabled = true;
  return (
    <div className="p-8 space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Manage Your Business Website
          </h1>
          <p className="text-gray-600 mt-1">
            Configure your website's domain, content, and email settings.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <OffCanvasBtn
          buttonText="Configure Domain"
          formName="Configure Domain/Subdomain"
        >
          {(close) => (
            <>
              <ConfigureDomainForm onSuccess={close} />
            </>
          )}
        </OffCanvasBtn>

        <OffCanvasBtn
          buttonText="Edit Landing Page Content"
          formName="Landing Page Content"
        >
          {() => (
            <>
              <CreateCustomerLandingContent />
            </>
          )}
        </OffCanvasBtn>

        <OffCanvasBtn
          buttonText="Configure SMTP"
          formName="Email SMTP Settings"
        >
          {(close) => (
            <>
              <ConfigureSMTPForm onSuccess={close} />
            </>
          )}
        </OffCanvasBtn>

        <Button disabled={isDisabled}>Preview Website</Button>
      </div>

      {/* Summary Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">123</div>
          </CardContent>
        </Card>
        Repeat other summary cards if needed
      </div> */}

      {/* Optional: Table/List of saved config */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Current Configurations</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This section can show existing SMTP, domain, or content config.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Domain Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Follow these steps to point your domain to our servers.
          </p>
          <DomainInstructions />
        </CardContent>
      </Card>
    </div>
  );
};
