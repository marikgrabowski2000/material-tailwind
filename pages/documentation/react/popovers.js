import React from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar.js';
import routes from 'routes.js';
import Navbar from 'components/Documentation/Navbar.js';
import Footer from 'components/Documentation/Footer.js';
import PopoversCode from 'components/Documentation/JavaScript/React/PopoversCode.js';
import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';

export default function SmallModal() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/small"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/small"
        />
        <title>React Pop Overs | Tailwind Starter Kit by Creative Tim</title>
      </Head>
      <Navbar fixed />
      <div className="container mx-auto mt-4 pt-12">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left">
            <Sidebar routes={routes} />
          </div>
          <div className="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
            <div className="my-8">
              <Heading
                title="React Popovers"
                description="React pop over component that appears around a button on user click."
              />

              <SmallHeading title="Popover Left" />
              <PopoversCode
                copyText={copy === 'Modal' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Modal' : '')}
                placement="left"
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Popover Right" />
              <PopoversCode
                copyText={copy === 'Modal' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Modal' : '')}
                placement="right"
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Popover Top" />
              <PopoversCode
                copyText={copy === 'Modal' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Modal' : '')}
                placement="top"
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Popover Bottom" />
              <PopoversCode
                copyText={copy === 'Modal' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Modal' : '')}
                placement="bottom"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/12 px-4 hidden lg:block"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
