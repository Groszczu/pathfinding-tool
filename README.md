# Pathfinding tool
This application was deployed on Github Pages. See result [here](https://groszczu.github.io/pathfinding-tool/).
## About
This project was created to learn how to use Redux, Redux Toolkit and React-Redux. Therefore performance of this application is not priority. I'm aware of disadvantages  of using React in this kind of application (lots of DOM re-renders). If you find yourself in need to increase speed and performance of this app, you can replace React \<Nodes\> component with canvas implementation.
  ### Pathfinding algorithms
  Used algorithms:
  - Dijkstra's algorithm (weight of all nodes are equal to 1)
  - A* algorithm (in production)
  ### User interface
  #### Toolbar
  By selecting suitable button from the toolbar you can change node to one of the following type:
  - ![#ffeadb](https://via.placeholder.com/15/ffeadb/000000?text=+) `empty node`
  - ![#4a3f35](https://via.placeholder.com/15/4a3f35/000000?text=+) `wall node`
  - ![#3cc200](https://via.placeholder.com/15/3cc200/000000?text=+) `start node`
  - ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `end node`
  #### Functional buttons
  - To start visualization of pathfinding click 'Start' button underneath the grid.
  - To reset nodes setting use 'Reset' button.
  - 'Clear' button leaves walls, start node and end node untouched but clears all visited (![#00a7e9](https://via.placeholder.com/15/00a7e9/000000?text=+)) and result (![#f7bd00](https://via.placeholder.com/15/f7bd00/000000?text=+)) nodes.
  - Button in bottom left corner allows to toggle between full screen and normal mode.
