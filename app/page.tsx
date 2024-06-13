import { BlogPosts } from 'app/components/posts';
import Image from 'next/image';

export default function Page() {
  return (
    <section className="flex flex-col items-center min-h-screen p-4">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-2xl font-semibold tracking-tighter flex items-center justify-center md:justify-start mb-4">
              Hi <span className="emojione--waving-hand wave-hand ml-2"></span>
            </h1>
            <h2 className="text-xl font-semibold tracking-tighter mt-2">
              <span className='gradient-text typing-animation'> I'm Shambhavi Sudarsan.</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0 md:ml-8">
            <div className="border-gradient w-36 h-36 rounded-full p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/personal-portfolio2/images/image.jpg" // Updated path
                  alt="Shambhavi"
                  fill
                  sizes="(max-width: 144px) 100vw, 144px"
                  style={{ objectFit: 'cover' }}
                  className="rounded-full enhanced-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center md:text-left">
          <p className="mb-4">
            {`I recently graduated with a Master's in Computer Science from the University of Utah, where I worked on exciting projects like parallelizing a maze-solving algorithm using CUDA. Currently, I'm contributing to ROMP, a high-performance model checker, to ensure software correctness and reliability.`}
          </p>
          <p className="mb-4">
            {`With experience in full-stack development and a strong foundation in algorithms and distributed systems, I'm passionate about building efficient and scalable software solutions. I'm actively seeking software development opportunities to apply my skills and enthusiasm.`}
          </p>
          <p className="mb-4">
            {`Beyond coding, I enjoy yoga, meditation, music, and arts. These activities help me stay balanced and inspire my creativity. Let's connect and create something amazing together!`}
          </p>
        </div>
        <div className="my-8">
          <BlogPosts />
        </div>
      </div>
    </section>
  );
}
