import Input from "@/component/Input";
import Todo from "@/component/Todo";

export default function Home() {

  return (

    <div className="w-full min-h-screen bg-gray-100 py-1 flex items-center flex-col ">
      <h1 className="text-2xl text-amber-950 font-bold mt-20">TODO APP</h1>


      <div className="w-[1000px] bg-amber-950 min-h-[500px] mt-14 rounded-2xl shadow-2xl p-4 ">
        <Input />
        <Todo />
      </div>
    </div>
  );
}
