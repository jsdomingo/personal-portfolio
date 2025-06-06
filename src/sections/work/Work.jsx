import React from "react";
import { Paper, Tabs, Tab, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Work.module.css";
import projects from "./projects";
import { motion } from "framer-motion";

const categories = ["All Projects", "Modelling", "Coding", "Recipes"];

export default function Work() {
  const [tab, setTab] = React.useState(0);

  const filteredProjects =
    tab === 0 ? projects : projects.filter(project => project.category === categories[tab]);

  return (
    <motion.div
    className={styles.stack}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
  >
    <div id="work" className={styles.container}>
      <Paper square elevation={0} className={styles.tabsContainer}>
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          indicatorColor="black"
          textColor="black"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'capitalize',
              fontFamily: '"Spline Sans Mono", monospace',
              fontWeight: 'regular',
            },
            '& .MuiTabs-indicator': {
              top: 0,
              borderBottom: 'none',
              borderTop: '2px solid rgb(0, 0, 0)',
            },
          }}
        >
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
      </Paper>

      <Grid container spacing={5} className={styles.grid}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Link
              to={project.id.startsWith('project-') ? `/project/${project.id}` : `/projects/${project.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Card className={styles.card}>
                <CardMedia
                  component="img"
                  className={styles.cardMedia}
                  image={project.image}
                  title={project.title}
                />
                <CardContent>
                  <Typography 
                    className={styles.cardTitle}
                    sx={{
                      fontFamily: '"Spline Sans Mono", monospace', 
                      textTransform: 'capitalize', 
                      fontWeight: 'regular', 
                      fontSize: 14,
                    }}
                  >
                    {project.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
        </motion.div>

  );
}
