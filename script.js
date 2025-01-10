function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
  
    // Toggle the sidebar
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    } else {
      sidebar.classList.add("open");
    }
  }
  