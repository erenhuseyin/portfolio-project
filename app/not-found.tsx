import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <p className="text-8xl font-bold text-gray-200 dark:text-white/10 select-none">
        404
      </p>
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white -mt-4">
        Sayfa Bulunamadı
      </h1>
      <p className="mt-3 text-gray-500 dark:text-white/50 max-w-sm">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <Link
        href="/"
        className="mt-8 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium
        hover:scale-105 hover:bg-gray-950 active:scale-100 transition dark:bg-white/10 dark:hover:bg-white/20"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
