// この部分に必要な部分をimport
import { client } from "../../libs/client"

import Link from 'next/link';


// SSGでデータ取得の場合はNext独自のgetStaticPropsを使って取得
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
  });

  console.log(data.contents, "中身");

  return {
    props: {
      blog: data.contents,
    },
  };
};

// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home({ blog }) {
  return (
    <div>
      <h1>ブログ</h1>
      {blog &&
        blog.map((item, index) => (
          <div key={item.id}>
            <Link href={`blog/${item.id}`}>{item.title}</Link>
            {/* <p>{item.text}</p> */}
          </div>
        ))

      }

    </div>
  )
}