import axios from "axios";

export default function Index({ data }) {
  return (
    <>
      <p>取得データ</p>
      <p>{"{ " + data.id + " : " + data.name + " }"}</p>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get("/api/test");
    const data = response.data;

    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { data: { name: "", id: "" } }, // エラー時は空のデータを返す
    };
  }
}
