function decryptMessages(input) {
    let n = Number(input.shift());
  
    for (let i = 0; i < n; i++) {
      let message = input[i];
      let validMessageRegex = /^([$%])([A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/;
      
      let match = message.match(validMessageRegex);
      
      if (match) {
        let tag = match[2];
        let encryptedMessage = match.slice(3).map(Number);
        let decryptedMessage = encryptedMessage.map(code => String.fromCharCode(code)).join('');
        
        console.log(`${tag}: ${decryptedMessage}`);
      } else {
        console.log("Valid message not found!");
      }
    }
  }
  
  // Example usage:
  let input = ["4", "$Request$: [73]|[115]|[105]|", "%Taggy$: [73]|[73]|[73]|", "%Taggy%: [118]|[97]|[108]|", "$Request$: [73]|[115]|[105]|[32]|[75]|"];
  decryptMessages(input);