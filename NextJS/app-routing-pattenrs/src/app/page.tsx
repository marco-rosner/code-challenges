import Link from "../../node_modules/next/link";
import { WrapperContent } from "./components/WrapperContent";

export default function Home() {
  return (
    <WrapperContent>
      <>
        <Link href="posts">Posts</Link>
        <Link href="catch-all">Catch ALL</Link>
        <Link href="catch-all/path/name">Catch ALL with pathname</Link>
        <Link href="optional-catch-all">Opotional Catch ALL</Link>
        <Link href="optional-catch-all/path/name">Opotional Catch ALL with pathname</Link>
        <Link href="nested">Nested layout Account Page</Link>
        <Link href="nested/password">Nested layout Password Page</Link>
        <Link href="parallel">Parallel Routes</Link>
      </>
    </WrapperContent>
  );
}
