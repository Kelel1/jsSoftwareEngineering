let testData = [
    {
      "FISCAL_YEAR":2010,
      "CAMPUS":"UH Manoa",
      "CIP":220101,
      "CIP_DESC":"Law",
      "GROUP1":"School of Law",
      "GROUP2":"School of Law",
      "GROUP3":"Law",
      "GROUP4":"",
      "GROUP5":"",
      "OUTCOME":"Other",
      "HAWAIIAN_LEGACY":"",
      "AWARDS":69
    },
    {
      "FISCAL_YEAR":2010,
      "CAMPUS":"Kapi`olani CC",
      "CIP":240101,
      "CIP_DESC":"Liberal Arts",
      "GROUP1":"General & Pre-Prof Ed",
      "GROUP2":"Liberal Arts",
      "GROUP3":"Liberal Arts",
      "GROUP4":"",
      "GROUP5":"",
      "OUTCOME":"Associate Degrees",
      "HAWAIIAN_LEGACY":"",
      "AWARDS":322
    }];
  console.log(testData);
  
  
  function totalDegrees(data) {
  
      let totlDegrees = _.reduce(data, function(iter,n){return iter += n.AWARDS}, 0);
    
    return totlDegrees;
  }
  
  function percentageHawaiian(data) {

	
  let hawaiiLegacy = _.filter(data, function(n){return n['HAWAIIAN_LEGACY'] === 'HAWAIIAN';   
  
  });
  
  
	return ((totalDegrees(hawaiiLegacy)/ totalDegrees(data)) * 100);
}
  
  console.log(percentageHawaiian(uhdata));


  
  function totalDegreesByYear(data, year) {

    let degreeCount = _.filter(data, function(n){return n['FISCAL_YEAR'] === year});
    
    console.log(_.reduce(degreeCount, function(val, n){return val += n['AWARDS']}, 0));
  }
  
  totalDegreesByYear(uhdata, 2013);


  function listCampuses(data) {

    console.log(_.uniq(data, function(c){return c['CAMPUS']}));
  }
    
  listCampuses(uhdata);

  // professor solution for listCampusDegrees

  function listCampusDegrees(data) { 
  
    let campus = _.groupBy(data, "CAMPUS");
    
    let degNum = _.mapObject(campus, totalDegrees);
   
   
   return (degNum);
   
    }