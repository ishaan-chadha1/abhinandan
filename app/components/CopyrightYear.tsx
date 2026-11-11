"use client";

import { useEffect, useState } from "react";

// Renders the current year on the client, avoiding a dynamic `new Date()`
// read during static prerendering (Next.js cacheComponents).
export default function CopyrightYear() {
  const [year, setYear] = useState(2025);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
