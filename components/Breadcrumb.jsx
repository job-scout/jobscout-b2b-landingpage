// components/Breadcrumb.js

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { slugify } from '@/utils';

const Breadcrumb = ({ items }) => {
  const router = useRouter();
  const query = router.query;

  return (
    <div className='text-xs md:text-sm'>
      {items.map((item, index) => {
        const exactURL = slugify(item.label);
        const noLink = exactURL === query.title;

        const content = (
          <span>
            {item.label}
          </span>
        );

        const separator = index < items.length - 1 && ' / ';

        return (
          <React.Fragment key={index}>
            {noLink ? (
              content
            ) : item.isButton ? (
              <button onClick={item.url}>
                {content}
              </button>
            ) : (
              <Link href={item.url} as={slugify(item.url)}>
                {content}
              </Link>
            )}
            {separator}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
