import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "../../../../supabase/client";

const ContactSchema = z.object({
  contact: z.string().min(3), // тут может быть email/телефон/любая строка
  name: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { contact, name } = ContactSchema.parse(body);

    const { data, error } = await supabaseAdmin
      .from("profiles") // <-- имя твоей таблицы
      .insert({ name, contact }) // <-- одна колонка, остальное ставит БД
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        {
          error: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { contact: data.contact, name: data.name },
      { status: 201 }
    );
  } catch (e: unknown) {
    const msg =
      e instanceof z.ZodError
        ? e.issues[0]?.message
        : e instanceof Error
        ? e.message
        : "Bad Request";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
