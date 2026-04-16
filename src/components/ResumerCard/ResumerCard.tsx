export default function ResumeCard() {
  return (
    <button className="group bg-white rounded-3xl border-2 border-slate-300 shadow-sm flex flex-col h-105 transition-all hover:border-brand-blueAction hover:scale-102 cursor-pointer ">
      <div className="bg-black w-full h-1/2 rounded-t-3xl"></div>
      <div className="flex flex-col bg-amber-700 flex-1 rounded-b-3xl p-6 justify-around">
        <div className="flex flex-row bg-black items-center text-start">
          <h1 className="text-white text-2xl font-semibold">Hola que tal</h1>
        </div>
        <div className="w-full h-px bg-slate-200 rounded-full"></div>
        <div className="flex flex-col gap-2 bg-white text-black">
          <span>oba</span>
          <span>oba</span>
        </div>
      </div>
    </button>
  );
}
