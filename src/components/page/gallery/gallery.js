import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import { useSetting } from "./use-setting";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { photos, layout, columns, targetRowHeight, spacing, padding, width } = useSetting();

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="grid w-full min-h-screen bg-[#fff] py-6">
      <div className="relative grid w-full h-full gap-8 p-0 py-6 place-content-center">
        <div className="grid grid-cols-[1fr_auto_1fr]" data-aos="zoom-in-up">
          <div className="flex items-center justify-end w-full">
            <div className="h-[1px] w-full bg-[#262f29]"></div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="font-[700] text-[26px] sm:text-[26px] md:text-[32px] mb-[3rem] tracking-[0.3rem] font-alexbrush text-[#262f29] text-center max-w-[980px] mx-auto leading-[1.5]">
              Album Hình Cưới
            </div>
          </div>
          <div className="flex items-center justify-start w-full">
            <div className="h-[1px] w-full bg-[#262f29]"></div>
          </div>
        </div>

        <div
          className="font-[500] text-[24px] sm:text-[24px] md:text-[32px] font-greatvibes text-[#262f29] text-center px-6"
          data-aos="zoom-in-up"
        >
          Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí.
        </div>
        <div className="relative">
          <PhotoAlbum
            photos={photos}
            layout={layout}
            columns={columns}
            spacing={spacing}
            padding={padding}
            targetRowHeight={targetRowHeight}
            render={{
              wrapper: (photo) => {
                const { style, ...rest } = photo;

                const index = photo.children[0].props.context.index;
                const isLeftSide = +index % 2 !== 0;
                return (
                  <div
                    data-aos={isLeftSide ? "fade-left" : "fade-right"}
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    data-aos-delay={50}
                    data-aos-offset={200}
                    onClick={() => handleImageClick(index)}
                    style={{
                      ...style,
                      padding: 0,
                      borderRadius: padding > 2 ? "4px" : "1px",
                      border: "8px",
                      boxShadow:
                        spacing + padding > 0
                          ? "0px 1px 0px 0px rgba(0,0,0,0.22), 1px 0px 0px 0px rgba(0,0,0,0.22), 1px 2px 0px 0px rgba(0,0,0,0.22), 2px 1px 0px 0px rgba(0,0,0,0.22), 2px 3px 0px 0px rgba(0,0,0,0.22), 3px 2px 0px 0px rgba(0,0,0,0.22), 3px 4px 0px 0px rgba(0,0,0,0.22), 4px 3px 0px 0px rgba(0,0,0,0.22), 4px 5px 0px 0px rgba(0,0,0,0.22), 5px 4px 0px 0px rgba(0,0,0,0.22), 5px 6px 0px 0px rgba(0,0,0,0.22), 6px 5px 0px 0px rgba(0,0,0,0.22), 6px 7px 0px 0px rgba(0,0,0,0.22), 7px 6px 0px 0px rgba(0,0,0,0.22), 7px 8px 0px 0px rgba(0,0,0,0.22), 8px 7px 0px 0px rgba(0,0,0,0.22);"
                          : "none",
                    }}
                    {...rest}
                  />
                );
              },
            }}
          />
          {isOpen && (
            <Lightbox
              slides={photos.map((photo) => ({ src: photo.src }))}
              open={isOpen}
              index={currentIndex}
              close={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>
    </section>
  );
};
