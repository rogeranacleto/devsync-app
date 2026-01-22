import bgDevsync from "../../assets/bg-devsync.png"
export function Hero(){
    return(
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center flex-col mt-30">
                <h1 className="text-5xl text-white font-medium mb-4 text-center">Lorem voluptatibus saepe veniam <br/> tempore excepturi dolorem?</h1>
                <p className="text-[#868282] max-w-3xl w-full text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore magni enim porro eaque facere <br/> placeat voluptatibus incidunt laboriosam autem commodi tempora repudiandae itaque, maiores sunt a fugiat, dicta atque provident?</p>
                <img src={bgDevsync} alt="DevSync Background" className="rounded-2xl max-w-5xl mt-20"/>
            </div>
        </div>
    )
}