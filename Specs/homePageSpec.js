var HomePage = function() {
    
    this.centerStageButtons = element(by.css(".center.stage-buttons"));
    this.viewOnGitHubButton = this.centerStageButtons.all(by.css(".btn.btn-large")).get(0);
    this.downloadButton = this.centerStageButtons.element(by.css(".btn-primary"));
    this.designDocsButton = this.centerStageButtons.element(by.css(".btn-warning"));
};

var DownloadModal = function() {
    
    this.downloadModal = element(by.css(".download-modal"));
};

var TheBasics = function() {
    
    this.helloBox = element.all(by.css(".row.example")).get(0);
    this.nameField = this.helloBox.element(by.model("yourName"));
    this.helloOutput = this.helloBox.element(by.tagName("h1"));
};

describe('Download button', function() {
    var homePage = new HomePage();
    var downloadModal = new DownloadModal();
    
    beforeEach(function() {
        browser.get('https://angularjs.org/');
    });
    
    it('should open up a download modal', function() {
        
        expect(downloadModal.downloadModal.isPresent()).toBe(false);
        //expect(downloadModal.downloadModal.isDisplayed()).toBe(false);   //this throws an error! uncomment to see
        homePage.downloadButton.click();
        browser.waitForAngular();
        expect(downloadModal.downloadModal.isDisplayed()).toBe(true);
    });    
});

describe('In "The Basics" tutorial', function() {
    var homePage = new HomePage();
    var theBasics = new TheBasics();
    
    beforeEach(function() {
        browser.get('https://angularjs.org/');
    });
    
    it('entering a name should output "Hello Name"', function() {
        var name = 'Hannah';
        
        theBasics.nameField.click();
        theBasics.nameField.sendKeys('Hannah');
        
        expect(theBasics.helloOutput.getText()).toEqual('Hello Hannah!');
        expect(theBasics.helloOutput.getText()).toContain('Hannah');
        
        theBasics.nameField.click();
        theBasics.nameField.clear();
        theBasics.nameField.sendKeys(name);
        expect(theBasics.helloOutput.getText()).toContain(name);
        expect(theBasics.helloOutput.getText()).toEqual('Hello' + ' ' + name + '!');
    });
});
