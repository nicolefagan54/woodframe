export const projectData = {
  project: {
    title: "DIY Queen-Size Bed Frame",
    summary: "A solid, simple, and elegant platform bed made from standard construction lumber.",
    details: [
      { label: "Skill Level", value: "Intermediate (comfortable with measuring, cutting, drilling)" },
      { label: "Estimated Time", value: "1–2 days (including finishing)" },
      { label: "Mattress Size", value: "Queen: ~60\" x 80\" (152 cm x 203 cm)" }
    ]
  },
  safety: {
    gear: [
      { item: "Eye protection", detail: "Safety glasses" },
      { item: "Hearing protection", detail: "Earplugs or earmuffs" },
      { item: "Dust protection", detail: "Dust mask or respirator" },
      { item: "Hand protection", detail: "Work gloves" }
    ],
    workspace: [
      { item: "Flat surface", detail: "Enough room to lay out full-length (8ft) boards" },
      { item: "Good lighting", detail: "To read measurements clearly" },
      { item: "Ventilation", detail: "Especially for sanding and finishing" }
    ],
    rules: [
      "Measure twice, cut once.",
      "Clamp workpieces before cutting or drilling.",
      "Unplug power tools when changing blades or bits."
    ]
  },
  toolsAndMaterials: {
    tools: {
      measuring: ["Tape measure", "Carpenter’s pencil", "Square"],
      cutting: ["Circular saw or miter saw"],
      drilling: ["Drill/driver", "Drill bits", "Screwdriver bits", "Pocket-hole jig (optional)"],
      finishing: ["Orbital sander (sandpaper: 80, 120, 220)", "Brushes or rags", "Bar clamps or C-clamps"]
    },
    materials: {
      lumber: [
        { name: "Side rails", count: 2, size: "1\" × 10\"", length: "80 ½\"" },
        { name: "Head/Foot rails", count: 2, size: "1\" × 10\"", length: "60 ½\" – 62 ½\"" },
        { name: "Inner Frame (Long)", count: 2, size: "2\" × 4\"", length: "~80 ¾\"" },
        { name: "Center Support", count: 1, size: "2\" × 4\"", length: "~60 ½\"" },
        { name: "Slats", count: "4–6", size: "2\" × 4\"", length: "~60 ½\"" },
        { name: "Legs", count: 4, size: "4\" × 4\" posts", length: "10\"–14\"" }
      ],
      fasteners: [
        "Wood screws (2 ½\" and 3\")",
        "Pocket-hole screws (if using jig)",
        "Wood glue",
        "Wood filler (optional)",
        "Stain or paint",
        "Clear coat (polyurethane)"
      ]
    }
  },
  buildSteps: [
    {
      phase: 1,
      title: "Frame & Legs",
      steps: [
        {
          id: 1,
          title: "Measure and Plan",
          content: "Confirm mattress size (measure actual length/width). Decide if you want a platform style (slats) or box spring support. Calculate final height: Leg + Frame + Mattress."
        },
        {
          id: 2,
          title: "Cut all lumber",
          content: "Mark cuts clearly with a square. Cut side boards, head/foot boards, inner frame pieces, and legs. Ensure all legs are exactly the same length."
        },
        {
          id: 3,
          title: "Build the inner support frame",
          content: "Lay out the frame (2 long parallel 2x4s). Add center cross member and check for square. Glue and screw (3\" screws). Add remaining slats evenly spaced."
        },
        {
          id: 4,
          title: "Attach legs",
          content: "Position legs at corners (flush with outer edges). Glue and screw from the frame into the leg (min 2 screws per side). Optional: add center support leg."
        }
      ]
    },
    {
      phase: 2,
      title: "Boards & Finishing",
      steps: [
        {
          id: 5,
          title: "Add side, head, and foot boards",
          content: "Clamp side boards to the frame (top edge slightly above slats). Screw from inside. Attach head/foot boards. Check alignment."
        },
        {
          id: 6,
          title: "Sanding",
          content: "Rough sand (80 grit) to remove saw marks. Medium (120 grit) to smooth. Fine (220 grit) to prepare for finish."
        },
        {
          id: 7,
          title: "Finishing",
          content: "Clean dust. Apply stain/paint (wipe excess). Let dry. Apply clear coat (polyurethane) for protection."
        },
        {
          id: 8,
          title: "Final assembly",
          content: "Move frame to bedroom. Check stability. Place mattress. Enjoy your new bed!"
        }
      ]
    }
  ],
  options: {
    headboard: {
      title: "Optional Headboard",
      description: "Build a separate panel style headboard from wide boards. Attach with bolts through the frame legs or mount to the wall with a French cleat."
    },
    tips: [
      { title: "Pre-drilling", content: "Always pre-drill holes near ends to prevent splitting." },
      { title: "Squareness", content: "Check diagonals frequently. Equal diagonals = Square frame." },
      { title: "Wood Selection", content: "Sight down boards at the store to ensure they are straight." }
    ]
  }
};
