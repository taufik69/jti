import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/enquiry-schema";

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = enquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // TODO: deliver the enquiry (email to admissions or CRM). Nothing is sent yet.
  return NextResponse.json({ ok: true });
}
