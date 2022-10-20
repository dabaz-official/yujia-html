class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="sticky top-0 z-40 grid grid-cols-3 bg-white/[.64] backdrop-blur-md shadow-md p-5 md:px-10">
        <!-- Left -->
        <a href="/" class="relative flex items-center h-10 cursor-pointer my-auto">
          <img
            src="/assets/images/global/logos/primary-logo.svg"
            alt="予家"
            class="h-8 w-auto md:h-10"
          />
        </a>

        <!-- Middle -->
        <div class="flex items-center py-2"></div>

        <!-- Right -->
        <div class="flex items-center justify-end">
          <div class="inline w-56 text-right space-x-4 text-gray-500">
            <a href="/rent" class="text-sm font-bold hidden md:inline hover:text-gray-700 transition duration-200">
              租房
            </a>
            <a href="/host.html" class="text-sm font-bold hidden md:inline hover:text-gray-700 transition duration-200">
              发布房源
            </a>
            <!--
            <div class="relative inline-block text-left">
              <div>
                <button id="dropdownBtn" class="inline-flex w-full justify-center rounded-full bg-blue-500 px-2 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="mb-1 mr-1 h-5 w-5 text-slate-200 hover:text-slate-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
              <div id="menu" class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden">
                <ul>
                  <div class="p-1">
                    <li>
                      <a href="/rent" class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-500 hover:text-white transition duration-200">
                        租房
                      </a>
                    </li>
                    <li>
                      <a href="/host.html" class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-500 hover:text-white transition duration-200">
                        发布房源
                      </a>
                    </li>
                  </div>
                  <div class="p-1">
                    <li>
                      <a href="/login.html" class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-500 hover:text-white transition duration-200">
                        登录
                      </a>
                    </li>
                    <li>
                      <a href="/register.html" class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-500 hover:text-white transition duration-200">
                        注册
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            -->
            <div class="relative inline-block text-left dropdown">
              <div>
                <button id="dropdownBtn" class="inline-flex w-full justify-center rounded-full bg-blue-500 px-2 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="mb-1 mr-1 h-5 w-5 text-slate-200 hover:text-slate-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
              <div id="menu" class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden">
                <ul>
                  <div class="p-1">
                    <li>
                      <a href="/rent" class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-500 hover:text-white transition duration-200">
                        租房
                      </a>
                    </li>
                    <li>
                      <a href="/host.html" class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-500 hover:text-white transition duration-200">
                        发布房源
                      </a>
                    </li>
                  </div>
                  <div class="p-1">
                    <li>
                      <a href="/account-settings" class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-500 hover:text-white transition duration-200">
                        个人信息
                      </a>
                    </li>
                    <li>
                      <a href="/history" class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-500 hover:text-white transition duration-200">
                        历史订单
                      </a>
                    </li>
                    <li>
                      <a href="/guest/inbox.html" class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-500 hover:text-white transition duration-200">
                        通知
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-500 hover:text-white transition duration-200">
                        退出
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    `
  }
}

customElements.define('header-without-search-bar', Header);