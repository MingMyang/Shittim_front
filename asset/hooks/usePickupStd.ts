function usePickupStd(stdList: any, pickupList: any){
    const pickupstd = [];

    for (let i = 0; i < pickupList.length; i++) {
      for (let j = 0; j < stdList.length; j++) {
        if (stdList[j].Id === pickupList[i]) {
          pickupstd[i] = {
            id: i,
            name: stdList[j].Name,
            src: stdList[j].CollectionTexture
          };
          break;
        }
      }
    }

    return pickupstd;
}

export default usePickupStd;