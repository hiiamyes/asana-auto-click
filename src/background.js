chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "loading") {
    chrome.scripting.executeScript({
      target: { tabId },
      function: () => {
        const loadMore = () => {
          const loadMoreButton = document.querySelector(
            ".SubtaskGrid-loadMore"
          );
          const showMoreCusrtomFields = document.querySelector(
            ".TaskPaneFields-showMoreCustomFields"
          );
          if (
            !loadMoreButton &&
            showMoreCusrtomFields?.innerText !== "Show more custom fields"
          )
            return;
          if (loadMoreButton) {
            loadMoreButton.click();
          }
          if (showMoreCusrtomFields) {
            showMoreCusrtomFields.click();
          }
          setTimeout(loadMore, 1000);
        };
        setTimeout(loadMore, 1000);
      },
    });
  }
});
