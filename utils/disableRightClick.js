export const disableRightClick = () => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
  
    if (typeof window !== 'undefined') {
      window.addEventListener('contextmenu', handleContextMenu);
    }
  };
  