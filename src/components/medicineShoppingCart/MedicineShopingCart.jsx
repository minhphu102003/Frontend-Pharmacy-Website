import React from 'react';
import {
  HiOutlineMinus,
  HiOutlinePlus,
  HiOutlineTrash
} from '../../ultils/icons';

const MedicineShoppingCart = () => {
  return (
    <div className="grid items-start justify-start gap-2 py-4 md:gap-4 md:p-0 md:grid-cols-[calc(16rem/16)_1fr_calc(24rem/16)] grid-cols-[calc(16rem/16)_1fr]">
      <div className="flex h-4 w-4 self-start pt-[calc(26rem/16)] [&>div]:flex [&>div]:h-4">
        <div className="space-y-2">
          <div>
            <label
              htmlFor=":r1b:-form-item"
              data-checked="true"
              className="group inline-flex cursor-pointer items-start w-4 h-4"
            >
              <span className="whitespace-nowrap">
                <input
                  className="peer absolute opacity-0"
                  id=":r1b:-form-item"
                  aria-describedby=":r1b:-form-item-description"
                  aria-invalid="false"
                  type="checkbox"
                  defaultChecked
                />
                <span className="flex rounded items-center justify-center border border-neutral-300 text-white/100 group-hover:border-primary-500 cursor-pointer peer-checked:bg-primary-500 peer-checked:border-primary-500 before:contents[' '] before:h-[6px] before:-rotate-45 before:w-[10px] before:border-white before:border-2 before:border-r-0 before:border-t-0 before:mb-[2px] peer-disabled:bg-neutral-600 peer-disabled:border-neutral-600 h-4 w-4">
                </span>
              </span>
              <span className="ml-2"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="grid grid-cols-[calc(68rem/16)_1fr] items-start gap-2">
          <div className="relative h-[calc(68rem/16)] w-[calc(68rem/16)] rounded-sm border border-neutral-100">
            <a href="/natures-way-kids-smart-vita-gummies-omega3-dha-fish-oil-60-htro-nao-va-mat-cho-tre-hop-60v.html">
              <img
                className="object-fit"
                src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P22416.png"
                alt=""
                loading="lazy"
                width="500"
                height="500"
                sizes="(max-width: 768px) 6rem, 6rem"
              />
            </a>
          </div>
          <div className="flex h-full flex-col justify-between md:flex-row md:space-x-4">
            <div className="grid flex-1 content-start gap-1">
              <a href="/natures-way-kids-smart-vita-gummies-omega3-dha-fish-oil-60-htro-nao-va-mat-cho-tre-hop-60v.html">
                <p className="line-clamp-2 text-sm font-semibold text-neutral-900">
                  Kẹo dẻo Nature's Way Kids Smart Vita Gummies Omega-3 DHA Fish Oil hỗ trợ bổ sung omega 3 tốt cho não và mắt của trẻ(Hộp 60 viên)
                </p>
              </a>
              <p className="text-sm text-neutral-700">Hộp</p>
              <div className="flex flex-wrap [&>div]:mb-1 [&>div]:me-1"></div>
            </div>
            <div className="flex h-fit items-center justify-between space-x-4 md:justify-center">
              <div className="flex flex-col justify-center md:w-[calc(160rem/16)] md:flex-row md:space-x-1">
                <p className="text-base line-through md:text-sm text-neutral-700">290.000&nbsp;₫</p>
                <p className="text-base font-semibold md:text-sm text-neutral-900">246.500&nbsp;₫</p>
              </div>
              <div className="flex w-[calc(117rem/16)] items-center justify-end self-end md:justify-center md:self-center">
                <div className="relative">
                  <div className="flex items-center gap-1 text-sm leading-4 h-[34px]">
                    <button
                      data-size="sm"
                      type="button"
                      className="relative flex justify-center outline-none font-semibold border-0 hover:bg-neutral-300 focus:ring-neutral-300 text-neutral-900 text-sm px-4 py-2 h-9 rounded-full !h-6 !w-6 bg-neutral-400 !p-1.5 transition-colors disabled:!bg-neutral-100 disabled:!text-neutral-600"
                    >
                      <HiOutlineMinus className="w-4 h-4" />
                    </button>
                    <input
                      inputMode="numeric"
                      maxLength="2"
                      className="border-neutral-500 text-neutral-900 rounded-lg placeholder:text-neutral-600 font-semibold focus:ring-neutral-500 focus:border-neutral-700 outline-none none-spin w-[30px] border-0 p-0 text-center disabled:bg-transparent disabled:text-neutral-600 text-sm leading-4 h-[34px]"
                      type="text"
                      defaultValue="1"
                    />
                    <button
                      data-size="sm"
                      type="button"
                      className="relative flex justify-center outline-none font-semibold border-0 hover:bg-neutral-300 focus:ring-neutral-300 text-neutral-900 text-sm px-4 py-2 h-9 rounded-full !h-6 !w-6 bg-neutral-400 !p-1.5 transition-colors disabled:!bg-neutral-100 disabled:!text-neutral-600"
                    >
                      <HiOutlinePlus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden w-[calc(120rem/16)] items-center justify-end md:flex">
                <p className="text-sm font-semibold text-neutral-900">246.500&nbsp;₫</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        data-size="sm"
        type="button"
        className="relative justify-center outline-none font-semibold focus:ring-primary-300 text-sm bg-transparent text-inherit border-0 hover:bg-0 hover:text-primary-500 focus:text-primary-500 hidden h-6 p-0 md:mt-1 md:flex"
      >
        <HiOutlineTrash className="w-4 h-4" />
      </button>
    </div>
  );
};

export default MedicineShoppingCart;
