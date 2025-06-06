import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  IconButton,
  Collapse,
  Paper
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useState, useRef, useLayoutEffect } from 'react';
import styles from './Experience.module.css';
import { motion, AnimatePresence } from 'framer-motion';

function createData(role, company, year, location, description, duration) {
  return { role, company, year, location, description, duration };
}

const cellStyle = {
  fontFamily: '"Spline Sans Mono", monospace',
  textTransform: 'capitalize',
  fontWeight: '400',
  fontSize: 14,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  borderBottom: 'none',
  borderLeft: 'none',
  borderRight: 'none',
};

const rows = [
  createData(
    "Systems Engineer",
    "Vow",
    "2024 – 2025",
    "Sydney",
    "Designed and developed integrated systems combining mechanical, electrical, and software components. Prototyped hardware and embedded software, executed test plans, and collaborated cross-functionally to optimize system performance.",
    "10 months"
  ),
  createData(
    "R&D Engineer",
    "Vow",
    "2022 – 2024",
    "Sydney",
    "Led product design using electronics, PCB, and CAD tools. Managed projects end-to-end, balancing cost-benefit trade-offs, and worked across teams to deliver innovative solutions.",
    "2 years 3 months"
  ),
  createData(
    "Fabrication Technician",
    "Vow",
    "2021 – 2022",
    "Sydney",
    "Fabricated custom devices to scale adherent cell culture processes. Worked closely with R&D to meet specifications, using precision tools for quality assembly.",
    "3 months"
  ),
  createData(
    "Casual Academic",
    "University of Technology Sydney",
    "2020 – 2021",
    "Sydney",
    "Facilitated hands-on learning for CAD beginners, focusing on SolidWorks fundamentals. Designed tutorials and created supporting materials to enhance student understanding and engagement.",
    "1 year 6 months"
  ),
  createData(
    "Biomedical Engineering Intern",
    "Royal Prince Alfred Hospital",
    "2017 – 2017",
    "Sydney",
    "Performed maintenance, repairs, and commissioning of medical equipment in compliance with Australian Standards. Assisted with preventative maintenance and equipment lifecycle management.",
    "6 months"
  )
];

export default function ExperienceTable() {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table>
        <TableBody>
          {rows.map((row, index) => (
            <ExpandableRow key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function ExpandableRow({ row }) {
  const [open, setOpen] = useState(false);
  const [roleWidth, setRoleWidth] = useState(null);
  const roleRef = useRef(null);

  useLayoutEffect(() => {
    if (roleRef.current) {
      setRoleWidth(roleRef.current.offsetWidth);
    }
  }, [open]);

  const variants = {
    closed: {
      scaleY: 0,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    open: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      <TableRow
        sx={{
          border: 'none',
          borderTop: '1px solid #dcdcdc',
          '& td, & th': {
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: 'none',
          },
        }}
      >
        <TableCell ref={roleRef} sx={cellStyle}>
          {row.role}
        </TableCell>
        <TableCell sx={cellStyle}>{row.company}</TableCell>
        <TableCell sx={cellStyle}>{row.year}</TableCell>
        <TableCell sx={{ ...cellStyle, width: '1px' }}>
          <IconButton
            size="small"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Collapse row' : 'Expand row'}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow sx={{ border: 'none' }}>
        <TableCell colSpan={4} sx={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <AnimatePresence>
              {open && (
                <motion.div
                  style={{ originY: 0, overflow: 'hidden' }}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={variants}
                  className={styles.expandableContent}
                >
                  <div className={styles.duration} style={{ width: roleWidth }}>
                    {row.duration}
                  </div>
                  <div className={styles.description}>
                    {row.description}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
