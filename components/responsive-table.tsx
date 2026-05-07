type ResponsiveTableProps = {
  caption: string;
  headers: string[];
  rows: string[][];
  compact?: boolean;
};

export function ResponsiveTable({
  caption,
  headers,
  rows,
  compact = false,
}: ResponsiveTableProps) {
  return (
    <div className="grid gap-3">
      <div className="grid gap-3 md:hidden">
        {rows.map((row) => (
          <article
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm"
            data-animate
            key={row.join("-")}
          >
            <p className="text-xs font-semibold uppercase text-[var(--accent)]">
              {headers[0]}
            </p>
            <h3 className="mt-1 font-serif text-2xl leading-tight text-[var(--text)]">
              {row[0]}
            </h3>
            <dl className="mt-4 grid gap-3">
              {row.slice(1).map((cell, index) => (
                <div
                  className="flex items-center justify-between gap-4 rounded-md bg-[var(--bg)] px-4 py-3"
                  key={`${row[0]}-${headers[index + 1]}`}
                >
                  <dt className="text-sm font-medium text-[var(--muted)]">
                    {headers[index + 1]}
                  </dt>
                  <dd className="text-right font-serif text-xl text-[var(--accent)]">
                    {cell}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <div
        className="hidden overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm md:block"
        data-animate
      >
        <table
          className={`w-full border-collapse text-left text-sm ${
            compact ? "min-w-full" : "min-w-[36rem]"
          }`}
        >
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-[var(--dark)] text-[var(--surface)]">
            <tr>
              {headers.map((header, index) => (
                <th
                  className={`px-6 py-5 font-semibold ${
                    index === 0 ? "" : "text-right"
                  }`}
                  key={header}
                  scope="col"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {rows.map((row) => (
              <tr
                className="transition odd:bg-[var(--surface)] even:bg-[color-mix(in_srgb,var(--bg)_58%,var(--surface))] hover:bg-[color-mix(in_srgb,var(--accent)_9%,var(--surface))]"
                key={row.join("-")}
              >
                {row.map((cell, index) => (
                  <td
                    className={`px-6 py-5 ${
                      index === 0
                        ? "font-semibold text-[var(--text)]"
                        : "text-right font-serif text-xl text-[var(--accent)]"
                    }`}
                    key={`${row[0]}-${cell}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
