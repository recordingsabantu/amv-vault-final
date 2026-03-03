// This function creates a professional ISRC for Abantu Recordings
const generateISRC = (trackNumber: number) => {
  const country = "ZA";
  const registrant = "AMV"; // Replace with your actual 3-character Registrant Code
  const year = "26";
  const designation = trackNumber.toString().padStart(5, '0');
  
  return `${country}-${registrant}-${year}-${designation}`;
};

// Inside your Component
const [isrc, setIsrc] = useState("");

// When the page loads, we "reserve" the next ISRC from your database
useEffect(() => {
  const fetchNextNumber = async () => {
    // We count how many releases you already have to get the next number
    const { count } = await supabase
      .from('releases')
      .select('*', { count: 'exact', head: true });
    
    const newIsrc = generateISRC((count || 0) + 1);
    setIsrc(newIsrc);
  };
  fetchNextNumber();
}, []);
