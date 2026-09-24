import { FolderGit2, Plus } from "lucide-react"

const EmptyRepository = () => {
  return (
    <main className="empty-state-container">
        <div className="items-center flex flex-col justify-end w-full gap-[var(--gap-md)]">
        <FolderGit2 className="empty-state-icon"
        size={80}/>
        <h2 className="empty-state-title">
            No repositories yet.
        </h2>
        <p className="empty-state-description">
            Connect one to start tracking your code and bugs.
        </p>
        </div>

        <div className="flex gap-[var(--gap-lg)]">

            <button className="empty-state-CTA">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="Github-Logo-2--Streamline-Logos" 
            height={20} width={24} ><desc>{"\n    Github Logo 2 Streamline Icon: https://streamlinehq.com\n  "}</desc><path 
            fill="currentColor" d="M11.996 1.284a10.986 10.986 0 0 0 -3.472 21.412c0.548 0.095 0.722 -0.227 0.722 -0.517 0 -0.263 0.006 -0.991 0 -1.91 -3.057 0.662 -3.688 -1.448 -3.688 -1.448a2.907 2.907 0 0 0 -1.22 -1.607c-0.997 -0.682 0.075 -0.669 0.075 -0.669a2.307 2.307 0 0 1 1.683 1.131 2.34 2.34 0 0 0 3.197 0.914 2.34 2.34 0 0 1 0.697 -1.464c-2.439 -0.279 -5.004 -1.22 -5.004 -5.432a4.248 4.248 0 0 1 1.132 -2.948 3.942 3.942 0 0 1 0.107 -2.907s0.924 -0.295 3.02 1.128a10.402 10.402 0 0 1 5.503 0c2.102 -1.422 3.018 -1.128 3.018 -1.128 0.405 0.92 0.444 1.96 0.109 2.907a4.243 4.243 0 0 1 1.13 2.95c0 4.223 -2.569 5.15 -5.016 5.42a2.604 2.604 0 0 1 0.752 2.026v3.041c0 0.294 0.177 0.619 0.735 0.512a10.986 10.986 0 0 0 -3.48 -21.411Z" strokeWidth={1} /></svg>
                Connect Github
            </button>

            <button className="empty-state-CTA">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="Gitlab--Streamline-Svg-Logos" height="20" width="24">
                    <path  d="m11.999975 22.82365 4.327 -13.317075h-8.654l4.327 13.317075Z" stroke-width="0.25"></path>
                    <path  d="m12.000075 22.823625 -4.327 -13.317075H1.6088875L12.000075 22.823625Z" stroke-width="0.25"></path>
                    <path  d="M1.60881 9.5066 0.2939125 13.55355c-0.1199335 0.3691 0.0114225 0.77345 0.32542 1.001575L12 22.823675 1.60881 9.5066Z" stroke-width="0.25"></path>
                    <path  d="M1.6088875 9.5066H7.673075L5.0669 1.485865c-0.134025 -0.4127675 -0.717925 -0.4126575 -0.85195 0L1.6088875 9.5066Z" stroke-width="0.25"></path>
                    <path  d="m12 22.823625 4.327 -13.317075h6.0642L12 22.823625Z" stroke-width="0.25"></path>
                    <path  d="m22.3912 9.5066 1.3149 4.04695c0.119925 0.3691 -0.011425 0.77345 -0.325425 1.001575L12 22.823675l10.3912 -13.317075Z" stroke-width="0.25"></path>
                    <path  d="M22.391225 9.5066H16.327025L18.9332 1.485865c0.13405 -0.4127675 0.717925 -0.4126575 0.85195 0L22.391225 9.5066Z" stroke-width="0.25"></path>
                </svg>
                Connect GitLab
            </button>
        </div>
    </main>
    
  )
}

export default EmptyRepository