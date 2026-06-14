import Link from "next/link";

type BreadcrumbProps = {
  currentPage: string;
};

export default function Breadcrumb({
  currentPage,
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        <li>
          <Link
            href="/"
            className="hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
        </li>

        <li aria-hidden="true"> {`>`}</li>

        <li
          aria-current="page"
          className="font-medium text-gray-900"
        >
          {currentPage}
        </li>
      </ol>
    </nav>
  );
}