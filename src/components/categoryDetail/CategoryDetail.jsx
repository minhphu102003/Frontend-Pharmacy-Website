import React from 'react';

const CategoryDetail = () => {
  return (
    // ! Link vào tới các sản phẩm với category detail như trên
    <a
      className="grid w-fit content-start justify-center justify-items-center gap-2"
      href="/tpcn-giam-can"
    >
      <span className="relative h-[calc(76rem/16)] w-[calc(76rem/16)] overflow-hidden rounded-full border border-primary-50 md:h-[calc(136rem/16)] md:w-[calc(136rem/16)]">
        <img
          className="h-full w-full object-cover"
        //   ! Img của category detail
          src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240223201327-0-P21576_1.png"
          alt="P21576_1.png"
          loading="lazy"
          width="500"
          height="500"
          sizes="(max-width: 768px) 13rem, 13rem"
        />
      </span>
      <p
    //   ! Category detail name
        title="Giảm cân"
        className="line-clamp-3 text-center text-sm font-medium text-neutral-900 md:line-clamp-2 md:text-base"
      >
        {/* ! Category detail name  */}
        Giảm cân
      </p>
    </a>
  );
};

export default CategoryDetail;
