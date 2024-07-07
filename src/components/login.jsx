import React from 'react'

const login = () => {
  return (
    <div><div class="h-screen w-screen bg-gray-400">
    <div
        class="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center">
        <div class="relative container m-auto px-6 md:w-7/12">
            <div class="m-auto">
                <div class="rounded-xl bg-white dark:bg-gray-800 shadow-xl">
                    <div class="p-8 ">
                        <button type="button"
                            class="absolute top-2 right-8 p-2 text-cyan-900 dark:text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center popup-close"><svg
                                aria-hidden="true" class="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    cliprule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close popup</span>
                        </button>
                        <div class="space-y-4">
                            <img src="https://www.svgrepo.com/show/475643/dribbble-color.svg" loading="lazy"
                                class="w-10"/>
                            <h2 class="mb-8 text-2xl text-cyan-900 dark:text-white font-bold">Log in to unlock the <br/>
                                best of MyCompany.
                            </h2>
                        </div>
                        <div class="mt-10 grid space-y-4">
                            <button
                                class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                <div class="relative flex items-center space-x-4 justify-center">
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                                        class="absolute left-0 w-5" alt="google logo"/>
                                    <span
                                        class="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                        with Google
                                    </span>
                                </div>
                            </button>
                        </div>
                        <div class="mt-14 space-y-4 py-3 text-gray-600 dark:text-gray-400 text-center">
                            <p class="text-xs">By proceeding, you agree to our
                                <a href="/privacy-policy/" class="underline">Terms of Use</a>
                                and confirm you have read our
                                <a href="/privacy-policy/" class="underline">Privacy and Cookie Statement</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div></div>
  )
}

export default login