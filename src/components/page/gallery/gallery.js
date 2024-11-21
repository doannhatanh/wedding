import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import { useSetting } from "./use-setting";
import Lightbox, { clsx } from "yet-another-react-lightbox";
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
    <section className="py-5 gallery-section section-bg-affect bg-[#fff]">
      <div className="container-fluid">
        <h2 className="section-title text-center aos-init aos-animate" data-aos="zoom-in-up">
          Album Hình Cưới
        </h2>
        <h3 class="section-sub-title mb-4 text-center" data-aos="zoom-in-up">
          Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí.
        </h3>
        <div className="row gx-2 relative">
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
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    data-aos-delay={50}
                    data-aos-offset={200}
                    onClick={() => handleImageClick(index)}
                    style={{
                      ...style,
                      borderRadius: padding > 2 ? "4px" : 0,
                      boxShadow:
                        spacing + padding > 0
                          ? "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
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
