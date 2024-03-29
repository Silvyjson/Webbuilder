import React from 'react';
import { blueArrowDown, diamondImage, halfFillStar, oneFillStar, starIcon, trophyImage } from '../assets/images';
import HostingCard from './Props/HostingCardsProps';

const HostingCardData = () => {
    const cards = [
        {
            index: "1",
            tagSrc: trophyImage,
            tag: "Best Choice",
            label: "Builder 1",
            rate: "9.8",
            remark: "Exceptional",
            starIcon: starIcon,
            title: "WixPro 72-Inch Responsive Website Builder-",
            article: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
            highlight: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
            arrowSrc: blueArrowDown
        },
        {
            index: "2",
            tagSrc: diamondImage,
            tag: "Best Value",
            label: "Builder",
            rate: "9.5",
            remark: "Excellent",
            starIcon: halfFillStar,
            title: "SiteCraft 68-Inch Ultimate Web Design Studio-",
            article: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
            highlight: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
            arrowSrc: blueArrowDown
        },
        {
            index: "3",
            label: "Builder 1",
            rate: "9.3",
            remark: "Exceptional",
            starIcon: starIcon,
            title: "WixPro 72-Inch Responsive Website Builder-",
            article: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
            highlight: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        },
        {
            className: "last-hosting-card",
            index: "4",
            label: "CDK",
            rate: "9.1",
            remark: "Very Good",
            starIcon: oneFillStar,
            title: "CDK Responsive Builder:",
            article: "An extensive library of widgets and apps, and detailed step-by-step guides",
            highlight: "Why we love it",
            lastCard: [
                { content: "building responsive", contentValue: "9.9" },
                { content: "Cool", contentValue: "8.9" },
                { content: "Docs", contentValue: "8.9" },
            ],
            lastCardComment: ["Documentation", "Easy Use", "Out of box"]
        }
    ];

    return (
        <div className='hosting-card-layout'>
            {cards.map((card, index) => (
                <HostingCard key={index} {...card} />
            ))}
        </div>
    );
};

export default HostingCardData;
