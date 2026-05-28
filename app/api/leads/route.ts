import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // TODO: wire this up to a real CRM / email forwarder before production:
    // - HubSpot / Pipedrive / Salesforce API
    // - SendGrid / Postmark / Resend email
    // - Webhook to Zapier / Make / n8n
    //
    // For now, just log and respond OK so the form's success state shows.
    console.log("[RAH360 lead]", data);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[RAH360 lead error]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
