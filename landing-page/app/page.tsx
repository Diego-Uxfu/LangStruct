import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Select a lesson.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Programmed by:{" "}
            <a
              href="https://www.linkedin.com/in/diego-mendez-vazquez/"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Diego
            </a>{" "}
            ,{" "}
            <a
              href="https://www.linkedin.com/in/pete-thambundit-91b740324/"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Pete
            </a>{" "}
            .
          </p>
        </div>

          {/* following is for buttons, leading to lesson plans. as of now, at least 2 are in motion*/}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/verb_lesson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Verb Forms
          </Link>
            {/* end of button one*/}

            {/*start of button 2*/}
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/sentence"
            target="_blank"
            rel="noopener noreferrer"
          >

            Sentence Completion

          </a>
                    <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/lesson"
            target="_blank"
            rel="noopener noreferrer"
          >

            premade sentences
          </a>
            {/*end of button 3*/}
        </div>
      </main>
    </div>
  );
}
