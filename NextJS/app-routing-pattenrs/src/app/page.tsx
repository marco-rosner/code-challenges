import Link from "../../node_modules/next/link";
import { WrapperContent } from "./components/WrapperContent";

export default function Home() {
  return (
    <WrapperContent>
      <Link href="posts">Posts</Link>
    </WrapperContent>
  );
}
