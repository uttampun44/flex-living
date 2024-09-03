   "use client"

import Image from "next/image";
import { cn } from "@/utils/cn";
import Hero from "@/components/Hero";
import HeroImage from "@/image/homeHero.jpg";
import HeroMessageBox from "@/components/HeroMessageBox";
import FlexImage from "@/image/heroImage.jpg";
import Card from "@/components/Card";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShordiTech from "@/image/shorditech.jpg";
import London from "@/image/london.jpg";
import TheWestEnd from "@/image/thewestend.jpg";
import Kenigston from "@/image/kenigston.jpg";
import Thames from "@/image/thames.png";
import HammerSmith from "@/image/hammersmith.jpg";
import Button from "@/components/Button";
import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";

export default function Home() {

  return (
   <>
       <TopNavigation />
    <main className={cn("")}>
      <section className={cn("heroSection")}>
        <Hero>
          <div className={cn("heroContainer")}>
            <Image
              src={HeroImage}
              quality={100}
              alt="heroImage"
              loading="lazy"
              className={cn("w-full")}
            />
          </div>
        </Hero>
        <HeroMessageBox
          title="We rent your property"
          description="Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis proin fermentum, consectetur cursus."
          className={cn(
            "bg-white text-black absolute max-w-[493px] w-full top-[40%] left-0 py-14 px-20 rounded-r-3xl "
          )}
        />
      </section>

      <section className={cn("pt-44 pb-36")}>
        <div
          className={cn(
            "futureFlexible max-w-[1280px] w-full flex mx-auto bg-bg-card rounded-[60px]"
          )}
        >
          <div className={cn("imageFuture w-[50%]")}>
            <Image
              src={FlexImage}
              quality={100}
              loading="lazy"
              alt="flex_living"
              className={cn("h-full w-full")}
            />
          </div>
          <div
            className={cn("flexTitle w-[50%] py-[120px] px-[80px] text-center")}
          >
            <h2 className={cn("text-4xl font-bold")}>The future is flexible</h2>
            <p className={cn("text-base font-normal mt-6")}>
              We believe in a world where finding a home is just a click away.
              Whether you’re selling your home, travelling for work or moving to
              a new city. Just bring your bags, and we’ll handle the rest.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={cn("homeSectionThreeContainer")}>
          <div className={cn("title max-w-[847px] mx-auto w-full")}>
            <h2 className={cn("text-5xl font-lato text-center font-bold")}>
              Id aliquam molestie nunc quis turpis imperdiet quis
            </h2>
            <p
              className={cn("font-normal text-base mt-4 font-lato text-center")}
            >
              Euismod condimentum tempus quis nibh. Accumsan imperdiet non
              vulputate venenatis, lorem amet, purus amet, sagittis. Cum orci
              quam enim adipiscing interdum purus.
            </p>
          </div>
          <div className="cardRow max-w-[1280px] mx-auto flex gap-x-4 pt-[60px] pb-[140px]">
            <Card className={cn("w-[25%]")}>
              <div
                className={cn(
                  "cardBox  grid gap-y-4 rounded-[30px] bg-[#E2F1E8] justify-center px-10 py-8"
                )}
              >
                <CalendarMonthIcon style={{ width: "40px", height: "40px" }} />
                <strong className={cn("")}>Flex Living</strong>
                <p className={cn("font-lato h-[72px] text-base font-normal")}>
                  Stay as Long or as little as you need with month-to- month
                  contracts
                </p>
              </div>
            </Card>

            <Card className={cn("w-[25%]")}>
              <div
                className={cn(
                  "cardBox grid gap-y-4 rounded-[30px] bg-[#E2F1E8] justify-center px-10 py-8"
                )}
              >
                <CalendarMonthIcon style={{ width: "40px", height: "40px" }} />
                <strong className={cn("")}>Move-in Ready</strong>
                <p className={cn("font-lato h-[72px] text-base font-normal")}>
                  Ready to move in with everything you need
                </p>
              </div>
            </Card>

            <Card className={cn("w-[25%]")}>
              <div
                className={cn(
                  "cardBox grid gap-y-4 rounded-[30px] bg-[#E2F1E8] justify-center px-10 py-8"
                )}
              >
                <CalendarMonthIcon style={{ width: "40px", height: "40px" }} />
                <strong className={cn("")}>Hi-Speed WI-FI</strong>
                <p className={cn("font-lato h-[72px] text-base font-normal")}>
                  Best in class internet speeds suitable for working from home
                </p>
              </div>
            </Card>

            <Card className={cn("w-[25%]")}>
              <div
                className={cn(
                  "cardBox grid gap-y-4 rounded-[30px] bg-[#E2F1E8] justify-center px-10 py-8"
                )}
              >
                <CalendarMonthIcon style={{ width: "40px", height: "40px" }} />
                <strong className={cn("")}>24/7 support</strong>
                <p className={cn("font-lato h-[72px] text-base font-normal")}>
                  On hand team for any issues you have
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <div className={cn("chooseLocationContainer max-w-[1280px] mx-auto")}>
          <div className={cn("title")}>
            <h2 className={cn("text-4xl font-bold text-center")}>
              Choose your location
            </h2>
          </div>
          <div className={cn("rowCard mt-12 mb-20 flex gap-x-5")}>
            <Card className={cn("")}>
              <div className={cn("placeCard text-center")}>
                <strong className={cn("text-center")}>Shorditech</strong>
              </div>
              <div className="image w-[195px] h-auto mt-5">
                <Image
                  src={ShordiTech}
                  className={cn("w-full")}
                  alt="shorditech"
                  quality={100}
                  loading="lazy"
                />
              </div>
            </Card>

            <Card className={cn("")}>
              <div className={cn("placeCard text-center")}>
                <strong className={cn("text-center")}>City of London</strong>
              </div>
              <div className="image w-[195px] h-auto mt-5">
                <Image
                  src={London}
                  className={cn("w-full")}
                  alt="shorditech"
                  quality={100}
                  loading="lazy"
                />
              </div>
            </Card>

            <Card className={cn("")}>
              <div className={cn("placeCard text-center")}>
                <strong className={cn("text-center")}>The West End</strong>
              </div>
              <div className="image w-[195px] h-auto mt-5">
                <Image
                  src={TheWestEnd}
                  className={cn("w-full")}
                  alt="shorditech"
                  quality={100}
                  loading="lazy"
                />
              </div>
            </Card>

            <Card className={cn("")}>
              <div className={cn("placeCard text-center")}>
                <strong className={cn("text-center")}>Kensington</strong>
              </div>
              <div className="image w-[195px] h-auto mt-5">
                <Image
                  src={Kenigston}
                  className={cn("w-full")}
                  alt="shorditech"
                  quality={100}
                  loading="lazy"
                />
              </div>
            </Card>

            <Card className={cn("")}>
              <div className={cn("placeCard text-center")}>
                <strong className={cn("text-center")}>
                  Kingston-Upon-Thames
                </strong>
              </div>
              <div className="image w-[195px] h-auto mt-5">
                <Image
                  src={Thames}
                  className={cn("w-full")}
                  alt="shorditech"
                  quality={100}
                  loading="lazy"
                />
              </div>
            </Card>

            <Card className={cn("")}>
              <div className={cn("placeCard text-center")}>
                <strong className={cn("text-center")}>Hammersmith</strong>
              </div>
              <div className="image w-[195px] h-auto mt-5">
                <Image
                  src={HammerSmith}
                  className={cn("w-full")}
                  alt="shorditech"
                  quality={100}
                  loading="lazy"
                />
              </div>
            </Card>
          </div>
          <div className="rowButton max-w-[15%] mx-auto mb-36">
            <Button
              type="button"
              name="View all spaces"
              value="View all spaces"
              className={cn(
                "bg-bg-button-primary text-white font-bold text-lg font-lato text-center rounded-[40px] px-6 py-3"
              )}
            />
          </div>
        </div>
      </section>
    </main>
    <Footer />
   </>
  );
}
