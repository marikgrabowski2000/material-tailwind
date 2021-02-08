import React from 'react';
import { createPopper } from '@popperjs/core';

import DocsSnippet from 'components/Documentation/DocsSnippet.js';

export default class PopoversCode extends React.Component {
  state = {
    color: 'pink',
    popoverShow: false,
    type: 'react',
  };
  btnRef = React.createRef();
  popoverRef = React.createRef();
  onFrameworkClick = (type) => {
    switch (type) {
      case 'react':
        break;
      case 'angular':
        switch (this.props.placement) {
          case 'left':
            window.location =
              '/learning-lab/tailwind-starter-kit#/documentation/angular/left/popover';
            break;
          case 'top':
            window.location =
              '/learning-lab/tailwind-starter-kit#/documentation/angular/top/popover';
            break;
          case 'right':
            window.location =
              '/learning-lab/tailwind-starter-kit#/documentation/angular/right/popover';
            break;
          case 'bottom':
            window.location =
              '/learning-lab/tailwind-starter-kit#/documentation/angular/bottom/popover';
            break;
          default:
            break;
        }
        break;
      case 'vue':
        switch (this.props.placement) {
          case 'left':
            window.location =
              '/learning-lab/tailwind-starter-kit#/documentation/vue/left/popover';
            break;
          case 'top':
            window.location =
              '/learning-lab/tailwind-starter-kit#/documentation/vue/top/popover';
            break;
          case 'right':
            window.location =
              '/learning-lab/tailwind-starter-kit#/documentation/vue/right/popover';
            break;
          case 'bottom':
            window.location =
              '/learning-lab/tailwind-starter-kit#/documentation/vue/bottom/popover';
            break;
          default:
            break;
        }
        break;
      case 'html':
        switch (this.props.placement) {
          case 'left':
            window.location =
              '/learning-lab/tailwind-starter-kit#/documentation/javascript/left/popover';
            break;
          case 'top':
            window.location =
              '/learning-lab/tailwind-starter-kit#/documentation/javascript/top/popover';
            break;
          case 'right':
            window.location =
              '/learning-lab/tailwind-starter-kit#/documentation/javascript/right/popover';
            break;
          case 'bottom':
            window.location =
              '/learning-lab/tailwind-starter-kit#/documentation/javascript/bottom/popover';
            break;
          default:
            break;
        }
        break;
      default:
        this.setState({ showErrorModal: true, modalText: type });
        break;
    }
  };
  openPopover = () => {
    new createPopper(this.btnRef.current, this.popoverRef.current, {
      placement: this.props.placement,
    });
    this.setState({ popoverShow: true });
  };
  closePopover = () => {
    this.setState({ popoverShow: false });
  };
  render() {
    let margin;
    switch (this.props.placement) {
      case 'left':
        margin = 'mr-3';
        break;
      case 'top':
        margin = 'mb-3';
        break;
      case 'right':
        margin = 'ml-3';
        break;
      case 'bottom':
        margin = 'mt-3';
        break;
      default:
        break;
    }
    let codeToShow =
      `import React from "react";
import { createPopper } from '@popperjs/core';

const Popover = ({ color }) => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const openPopover = () => {
    new createPopper(btnRef.current, popoverRef.current, {
      placement: "` +
      this.props.placement +
      `"
    });
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <button
            className={
              "bg-" +
              this.state.color +
              "-500 text-white active:bg-" +
              this.state.color +
              "-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            }
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            ref={btnRef}
          >
            ` +
      this.props.placement +
      ` {color}
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-" +
              color +
              "-600 border-0 ` +
      margin +
      ` block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div>
              <div
                className={
                  "bg-" +
                  color +
                  "-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg"
                }
              >
                {color} popover title
              </div>
              <div className="text-white p-3">
                And here's some amazing content. It's very engaging. Right?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function PopoverRender() {
  return (
    <>
      return <Popover color="` +
      this.state.color +
      `" />
    </>
  );
}
`;
    return (
      <>
        {this.state.showModal ? (
          <>
            <div
              className="block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              onClick={() => this.setState({ showModal: false })}
            >
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h5 className="text-2xl font-normal mt-0 mb-0 ">
                      Component not supported
                    </h5>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => this.setState({ showModal: false })}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4">
                      At the moment we do not support the choosen framework (
                      {this.state.modalText}) for this component.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <DocsSnippet
          copyText={this.props.copyText}
          onCopy={this.props.onCopy}
          activeColor={this.state.color}
          activeFramework={this.state.type}
          codeToShow={codeToShow}
          onColorClick={(color) => this.setState({ color: color })}
          onFrameworkClick={this.onFrameworkClick}
        >
          <div className="flex flex-wrap">
            <div className="w-full text-center">
              <button
                className={
                  'bg-' +
                  this.state.color +
                  '-500 text-white active:bg-' +
                  this.state.color +
                  '-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                }
                type="button"
                style={{ transition: 'all .15s ease' }}
                onClick={() => {
                  this.state.popoverShow
                    ? this.closePopover()
                    : this.openPopover();
                }}
                ref={this.btnRef}
              >
                {this.props.placement} {this.state.color}
              </button>
              <div
                className={
                  (this.state.popoverShow ? '' : 'hidden ') +
                  'bg-' +
                  this.state.color +
                  '-600 border-0 ' +
                  margin +
                  ' block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg'
                }
                ref={this.popoverRef}
              >
                <div>
                  <div
                    className={
                      'bg-' +
                      this.state.color +
                      '-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg'
                    }
                  >
                    {this.state.color} popover title
                  </div>
                  <div className="text-white p-3">
                    And here's some amazing content. It's very engaging. Right?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DocsSnippet>
      </>
    );
  }
}
