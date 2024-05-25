import React from 'react';

const PromotionsSidebar = () => {
  return (
    <div
      className="sticky top-[calc(var(--header-position-start-sticky)+12px)] hidden gap-4 md:grid"
      style={{ "--header-position-start-sticky": "0px" }}
    >
      <div>
        <div className="flex flex-col space-y-3 rounded-sm bg-white px-4 md:p-3">
          <div className="grid w-full grid-flow-col items-center justify-between">
            <div className="grid grid-cols-[24px_1fr] items-center justify-start gap-1">
              <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-6 h-6 text-primary-500">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 5.54541C2 5.1312 2.33579 4.79541 2.75 4.79541H21.25C21.6642 4.79541 22 5.1312 22 5.54541V9.74996C22 10.1642 21.6642 10.5 21.25 10.5C20.2347 10.5 19.4773 11.2574 19.4773 12.2727C19.4773 13.288 20.2347 14.0454 21.25 14.0454C21.6642 14.0454 22 14.3812 22 14.7954V19C22 19.4142 21.6642 19.75 21.25 19.75H2.75C2.33579 19.75 2 19.4142 2 19V14.7954C2 14.3812 2.33579 14.0454 2.75 14.0454C3.76533 14.0454 4.52273 13.288 4.52273 12.2727C4.52273 11.2574 3.76533 10.5 2.75 10.5C2.33579 10.5 2 10.1642 2 9.74996V5.54541ZM3.5 6.29541V9.08182C4.9672 9.40982 6.02273 10.6881 6.02273 12.2727C6.02273 13.8573 4.9672 15.1355 3.5 15.4635V18.25H20.5V15.4635C19.0328 15.1355 17.9773 13.8573 17.9773 12.2727C17.9773 10.6881 19.0328 9.40982 20.5 9.08182V6.29541H3.5Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.053 9.21967C15.3459 9.51256 15.3459 9.98744 15.053 10.2803L10.0076 15.3258C9.71467 15.6187 9.2398 15.6187 8.9469 15.3258C8.65401 15.0329 8.65401 14.558 8.9469 14.2651L13.9924 9.21967C14.2853 8.92678 14.7601 8.92678 15.053 9.21967Z"
                    fill="currentColor"
                  />
                  <path
                    d="M9.89772 10.5908C10.5943 10.5908 11.1591 10.0261 11.1591 9.32948C11.1591 8.63285 10.5943 8.06812 9.89772 8.06812C9.20108 8.06812 8.63635 8.63285 8.63635 9.32948C8.63635 10.0261 9.20108 10.5908 9.89772 10.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.1023 16.4771C14.7989 16.4771 15.3637 15.9123 15.3637 15.2157C15.3637 14.5191 14.7989 13.9543 14.1023 13.9543C13.4057 13.9543 12.8409 14.5191 12.8409 15.2157C12.8409 15.9123 13.4057 16.4771 14.1023 16.4771Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <p className="font-semibold">Khuyến mãi</p>
            </div>
            <div>
              <div
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r1l:"
                data-state="closed"
              >
                <div>
                  <button
                    className="relative justify-center border-0 bg-transparent text-sm font-normal text-hyperLink outline-none md:hover:text-primary-600 md:text-base hidden md:flex"
                    type="button"
                  >
                    Chọn mã
                  </button>
                  <div className="grid grid-flow-col items-center justify-start md:hidden">
                    <button
                      className="relative flex justify-center border-0 bg-transparent text-sm font-normal text-hyperLink outline-none md:hover:text-primary-600 md:text-base"
                      type="button"
                    >
                      Chọn mã
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-flow-col items-center gap-2 rounded-sm bg-white md:grid-flow-row md:items-start md:gap-4 md:p-4">
          <div className="grid gap-4">
            <div className="hidden grid-flow-col items-center justify-between gap-2 md:grid">
              <p className="text-sm text-neutral-900">Tạm tính</p>
              <p className="text-sm font-semibold text-neutral-900">509.000&nbsp;₫</p>
            </div>
            <div className="hidden grid-flow-col items-center justify-between gap-2 md:grid">
              <p className="text-sm text-neutral-900">Giảm giá ưu đãi</p>
              <p className="text-sm font-semibold text-neutral-900">-</p>
            </div>
            <div className="hidden grid-flow-col items-center justify-between gap-2 md:grid">
              <p className="text-sm text-neutral-900">Giảm giá sản phẩm</p>
              <p className="text-sm font-semibold text-neutral-900">-52.300&nbsp;₫</p>
            </div>
            <div className="bg-divider h-[1px] hidden md:block"></div>
            <div className="grid items-center justify-items-end gap-0.5 md:grid-flow-col md:justify-between md:gap-2">
              <p className="text-sm text-neutral-900 md:text-base md:font-semibold">Tổng tiền</p>
              <p className="text-xl font-bold leading-8 text-red-500 no-underline md:text-2xl">
                456.700&nbsp;₫
              </p>
            </div>
          </div>
          <button
            data-size="md"
            type="button"
            className="relative flex justify-center outline-none font-semibold text-white bg-primary-500 border-0 hover:bg-primary-600 focus:ring-primary-300 text-base py-2.5 h-12 items-center rounded-lg w-[calc(146rem/16)] px-2 md:w-full md:px-4"
          >
            Mua hàng<span className="ms-1 md:inline inline">(3)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionsSidebar;
