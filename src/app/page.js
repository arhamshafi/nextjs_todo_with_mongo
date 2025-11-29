import Input from "@/component/Input";

export default function Home() {

  return (

    <div className="w-full min-h-screen bg-gray-100 py-1 flex items-center flex-col ">
      <h1 className="text-2xl text-amber-950 font-bold mt-10">TODO APP</h1>

      <div className="w-[70%] bg-amber-950 min-h-[500px] mt-20 rounded-2xl shadow-2xl p-4 ">
        <Input />

      </div>

    </div>
  );
}
