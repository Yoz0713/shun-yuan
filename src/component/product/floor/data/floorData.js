const data = [
    {
        type: "b4",
        text: "B4",
    },
    {
        type: "b3",
        text: "B3",
    },
    {
        type: "b2",
        text: "B2",
    },
    {
        type: "b1",
        text: "B1",
    },
    {
        type: "1f",
        text: "1F",

    },
    {
        type: "1.5f",
        text: "1F夾層",
    },
    {
        type: "2f",
        text: "2F",
    },
    {
        type: "3f",
        text: "3F",

    },
    {
        type: "4f",
        text: "4F"
    },
    {
        type: "5~8f",
        text: "5F"
    },
    {
        type: "5~8f",
        text: "6F"
    },
    {
        type: "5~8f",
        text: "7F"
    },
    {
        type: "5~8f",
        text: "8F"
    },
    {
        type: "9~16f",
        text: "9F"
    },
    {
        type: "9~16f",
        text: "10F"
    },
    {
        type: "9~16f",
        text: "11F"
    },
    {
        type: "9~16f",
        text: "12F"
    },
    {
        type: "9~16f",
        text: "13F"
    },
    {
        type: "9~16f",
        text: "14F"
    },
    {
        type: "9~16f",
        text: "15F"
    },
    {
        type: "9~16f",
        text: "16F"
    },
    {
        type: "17f",
        text: "17F"
    },
    {
        type: "18~21f",
        text: "18F"
    },
    {
        type: "18~21f",
        text: "19F"
    },
    {
        type: "18~21f",
        text: "20F"
    },
    {
        type: "18~21f",
        text: "21F"
    },
    {
        type: "22f",
        text: "22F"
    },
    {
        type: "23f",
        text: "23F"
    },
    {
        type: "24f",
        text: "24F"
    },
    {
        type: "r1",
        text: "R1",
    },
    {
        type: "r2",
        text: "R2"
    },
    {
        type: "r3",
        text: "R3"
    }
]

export const sortData = [
    {
        type: "B4",
        img: require("@/img/product/floor/floorPlan/svg/B4.svg").default
    },
    {
        type: "B3",

        img: require("@/img/product/floor/floorPlan/svg/B3.svg").default
    },
    {
        type: "B2",

        img: require("@/img/product/floor/floorPlan/svg/B2.svg").default
    },
    {
        type: "B1",
        anchor: [
            {
                class: "elevator-base-floor-A",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/elevator-base-a1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/elevator-base-a2.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "地下室A棟梯廳"
            },
            {
                class: "elevator-base-floor-B",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/elevator-base-b1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/elevator-base-b2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/elevator-base-b3.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/elevator-base-b4.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "地下室B棟梯廳"
            },
            {
                class: "elevator-base-floor-C",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/elevator-base-c1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/elevator-base-c2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/elevator-base-c3.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "地下室C棟梯廳"
            },
        ],
        img: require("@/img/product/floor/floorPlan/webp/B1.webp").default
    },
    {
        type: "1F",
        img: require("@/img/product/floor/floorPlan/webp/1F.webp").default,
        anchor: [
            {
                class: "entry-gate",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/entry-gate.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "社區入口"
            },
            {
                class: "lobby",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/lobby.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "月光珠寶盒大廳"
            }, {
                class: "ab-center",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/ab-center.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "一樓梯廳走道"
            }, {
                class: "elevator-first-floor-A",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/elevator-firstfloor.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "一樓A棟梯廳"
            },
            {
                class: "elevator-first-floor-B",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/elevator-firstfloor.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "一樓B棟梯廳"
            },
            {
                class: "elevator-first-floor-C",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/elevator-firstfloor-c.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "一樓C棟梯廳"
            },
            {
                class: "mail-area",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/mail-area.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "收信區"
            },
            {
                class: "meeting-room",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/meeting-room.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "會議室"
            },
            {
                class: "art1",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/art1.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "旋轉的風景"
            },
            {
                class: "cafe-1f",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/1f-cafe-1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/1f-cafe-2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/1f-cafe-3.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "旋轉的風景"
            },
            // {
            //     class: "art2",
            //     fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/art2.webp").default],
            //     thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
            //     title: "月圓"
            // },
            {
                class: "gym",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/gym1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/gym2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/gym3.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "綠草如茵健身房"
            },
            {
                class: "children-game",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/children-game1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/children-game2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/children-game3.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "親子遊戲美術屋"
            },
            {
                class: "office",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/office.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/office2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/office3.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/office4.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "共享辦公室"
            },
            {
                class: "corridor",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/corridor1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/corridor2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/corridor3.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/corridor4.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "一樓廊道"
            }
        ],
        text: "全區平面圖"
    },
    {
        type: "1.5F",
        img: require("@/img/product/floor/floorPlan/svg/1.5F.svg").default,
        anchor: [
            {
                class: "cafe",
                fancyImg: [require("@/img/team/design/webp/007-postulate-fancyImg3-preload.webp").default, require("@/img/product/cafe/webp/001-cafe-bg2.webp").default, require("@/img/product/cafe/webp/002-cafe-bg3.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "Mori Café森"
            },
            {
                class: "pool",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/pool-light.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/pool-night.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "戶外游泳池"
            },
            {
                class: "pool-chat",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/pool-chat.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "泳池交誼廳"
            },
            {
                class: "pool-seat",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/pool-seat.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "泳池露臺"
            }
        ]
    },
    {
        type: "2F",
        img: require("@/img/product/floor/floorPlan/webp/2F.webp").default,
        anchor: [
            {
                class: "chat-banquet",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/banquet-room1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/banquet-room2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/banquet-room3.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/chatting-room.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "交誼宴會廳"
            }, {
                class: "sky-garden",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/sky-garden1-v1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-garden2-v1.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "空中花園"
            }, {
                class: "sky-garden2",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/sky-garden3.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "星空花園"
            },
            {
                class: "elevator-standard-floor-B",
                fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/standard-elevator-B-1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/standard-elevator-B-2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/standard-elevator-B-3.webp").default],
                thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
                title: "標準層B棟梯廳"
            },
        ]
    },
    {
        type: "3F",
    },
    {
        type: "4F",
    },
    {
        type: "5~8F",
        img: {
            A: require("@/img/product/floor/floorPlan/svg/A-5~8.svg").default,
            B: require("@/img/product/floor/floorPlan/svg/B-5~8.svg").default,
            C: require("@/img/product/floor/floorPlan/svg/C-5~8.svg").default
        }
    },
    {
        type: "9~16F",
        img: {
            A: require("@/img/product/floor/floorPlan/svg/A-9~16.svg").default,
            B: require("@/img/product/floor/floorPlan/svg/B-9~16.svg").default,
            C: require("@/img/product/floor/floorPlan/svg/C-9~16.svg").default
        }
    },
    {
        type: "17F",

    },
    {
        type: "18~21F",
        img: {
            A: require("@/img/product/floor/floorPlan/svg/A-18~21.svg").default,
            B: require("@/img/product/floor/floorPlan/svg/B-18~21.svg").default,
            C: require("@/img/product/floor/floorPlan/svg/C-18~21.svg").default
        }

    },
    {
        type: "22F",

    },
    {
        type: "23F",

    },
    {
        type: "24F",

    },
    {
        type: "R1",
        img: {
            A: require("@/img/product/floor/floorPlan/svg/A-R1.svg").default,
            B: require("@/img/product/floor/floorPlan/svg/B-R1.svg").default,
            C: require("@/img/product/floor/floorPlan/svg/C-R1.svg").default
        },
        // anchor: {
        //     A: [
        //         {
        //             class: "sky-bar-A",
        //             fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/sky-bar1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar3.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar4.webp").default],
        //             thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
        //             title: "A棟星空時尚花園吧"
        //         },
        //         {
        //             class: "ktv-A",
        //             fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/ktv1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/ktv2.webp").default],
        //             thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
        //             title: "A棟KTV包廂"
        //         },
        //     ],
        //     B: [
        //         {
        //             class: "sky-bar-B",
        //             fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/sky-bar1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar3.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar4.webp").default],
        //             thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
        //             title: "B棟星空時尚花園吧"
        //         },
        //         {
        //             class: "ktv-B",
        //             fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/ktv1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/ktv2.webp").default],
        //             thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
        //             title: "B棟KTV包廂"
        //         },
        //     ],
        //     C: [
        //         {
        //             class: "sky-bar-C",
        //             fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/sky-bar1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar3.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar4.webp").default],
        //             thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
        //             title: "C棟星空時尚花園吧"
        //         },
        //         {
        //             class: "ktv-C",
        //             fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/ktv1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/ktv2.webp").default],
        //             thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
        //             title: "C棟KTV包廂"
        //         },
        //     ]
        // }
    },
    {
        type: "R2",
    },
    {
        type: "R3",
    }
]
export const floorData = data.reverse()