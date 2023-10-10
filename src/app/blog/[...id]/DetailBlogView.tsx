import Image from "next/image";


export default function DetailBlogView({blog} : {blog: any}) {
  console.log(blog);
  // const {deskripsi} = blog
  // console.log(deskripsi);
  
  return (
    <>
      <div className="w-[90%] min-h-[90vh] max-h-max mt-16 flex flex-col items-center gap-4 justify-center mb-4 p-2 lg:w-[60%]">
        <div className="w-full h-[180px] border rounded-lg lg:h-full" id="img">
          <Image 
            className="w-full h-full object-cover rounded-lg"
            src={blog.image}
            alt="image blog"
            width={0}
            height={0}
          />
        </div>
        <div className=" w-full p-2">
          <h1 className="text-center" id="font1">{blog.title}</h1>
          <p className="text-[.7rem] text-[#b4b3b3] mt-2 italic">Tanggal: {blog.date}</p>
        </div>
        {blog.deskripsi ? (
          <div className="w-full p-2 flex flex-col gap-4 text-[.9rem]">
            <p>{blog.deskripsi.deskripsiTitle}</p>
            <p>{blog.deskripsi.deskripsiBody}</p>
            <div className="">
              <p className="italic">Kesimpulan: </p>
              <p className="text-[.8rem] text-[#b6b4b4] border p-2 mt-2 rounded-md  backdrop-blur-[5px] bg-[#fffdfd17]">{blog.deskripsi.kesimpulan}</p>
            </div>
          </div>
        ): null}
      </div>
    </>
  )
};
