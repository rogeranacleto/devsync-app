export function Header(){
    return (
      <div className="bg-transparent w-full">
        <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
          <div className="flex items-center gap-15">
            <h1 className="text-white text-lg">DevSync</h1>
            <div className="flex items-center gap-6">
              <p className="text-[#918c8c] text-sm hover:text-[#dfd3d3] duration-300 cursor-pointer">Plataforma</p>
              <p className="text-[#918c8c] text-sm hover:text-[#dfd3d3] duration-300 cursor-pointer">Sobre</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <p className="text-[#dfd3d3] text-xs border border-solid border-[#918c8c] px-4 py-2 rounded-lg cursor-pointer">ENTRAR</p>
            <p className="text-[#dfd3d3] text-xs border border-solid border-[#918c8c] px-4 py-2 rounded-lg cursor-pointer">CADASTRO</p>
          </div>
        </div>
      </div>
    );
}