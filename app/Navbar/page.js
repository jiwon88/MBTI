import Link from "next/link";

export default function Navbar(){
    return(
        <div className="pt-8 p-6 flex gap-10 border-b-2 border-gray-200">
            <div className="flex items-center">
                <Link href={'/'} className="text-5xl font-bold text-gray-600 py-4 p-6">MBTI</Link>
            </div>
            <div className="flex items-center gap-8 text-l text-gray-600">
                <Link href={'/category'} className="hover:text-cyan-600 hover:border-b-4 hover:border-cyan-500 ">성격 유형</Link>
                <Link href={'/evaluation'} className="hover:text-cyan-600 hover:border-b-4 hover:border-cyan-500">팀 평가</Link>
                <Link href={'/inquiry'} className=" hover:text-cyan-600 hover:border-b-4 hover:border-cyan-600">문의</Link>
            </div>
            {/* <div className="flex items-center ml-auto p-2 text-lg">
                <span>🇰🇷 한국어</span>
            </div> */}
           
        </div>

      
    )
}