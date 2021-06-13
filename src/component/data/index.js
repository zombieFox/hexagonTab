import { state } from '../state';
import { bookmark } from '../bookmark';
import { version } from '../version';
import { update } from '../update';
import { modal } from '../modal';

import { dateTime } from '../../utility/dateTime';
import { node } from '../../utility/node';
import { isJson } from '../../utility/isJson';
import { clearChildNode } from '../../utility/clearChildNode';

const data = {};

data.saveName = 'hexagonTab';

data.set = function(key, data) {
  localStorage.setItem(key, data);
};

data.get = function(key) {
  return localStorage.getItem(key);
};

data.import = function(input, feedback) {
  const fileList = input.files;

  if (fileList.length > 0) {
    data.validateJsonFile(fileList, input, feedback);
  };
};

data.validateJsonFile = function(fileList, input, feedback) {
  // make new file reader
  var reader = new FileReader();
  // define the on load event for the reader
  reader.onload = function(event) {
    // is this a JSON file
    if (isJson(event.target.result)) {
      // is this JSON from this app
      if (JSON.parse(event.target.result)[data.saveName]) {
        data.render.feedback.clear(feedback);
        data.render.feedback.success(feedback, fileList[0].name, function() {
          data.restore(JSON.parse(event.target.result));
          data.save();
          data.render.reload();
        });
        input.value = '';
      } else {
        data.render.feedback.clear(feedback);
        data.render.feedback.fail.notAppJson(feedback, fileList[0].name);
        input.value = '';
      };
    } else {
      // not a JSON file
      data.render.feedback.clear(feedback);
      data.render.feedback.fail.notJson(feedback, fileList[0].name);
      input.value = '';
    };
  };
  // invoke the reader
  reader.readAsText(fileList.item(0));
};

data.export = function() {
  let timestamp = dateTime();

  const leadingZero = function(value) {
    if (value < 10) {
      value = '0' + value;
    };
    return value;
  };

  timestamp.hours = leadingZero(timestamp.hours);
  timestamp.minutes = leadingZero(timestamp.minutes);
  timestamp.seconds = leadingZero(timestamp.seconds);
  timestamp.date = leadingZero(timestamp.date);
  timestamp.month = leadingZero(timestamp.month + 1);
  timestamp.year = leadingZero(timestamp.year);
  timestamp = timestamp.year + '.' + timestamp.month + '.' + timestamp.date + ' - ' + timestamp.hours + ' ' + timestamp.minutes + ' ' + timestamp.seconds;

  const fileName = data.saveName + ' backup - ' + timestamp + '.json';

  const dataToExport = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data.load()));

  const link = document.createElement('a');
  link.setAttribute('href', dataToExport);
  link.setAttribute('download', fileName);
  link.addEventListener('click', function() {
    this.remove();
  });

  document.querySelector('body').appendChild(link);
  link.click();
};

data.remove = function(key) {
  localStorage.removeItem(key);
};

data.backup = function(dataToBackup) {
  if (dataToBackup) {
    console.log('data version ' + dataToBackup.version + ' backed up');
    data.set(data.saveName + 'Backup', JSON.stringify(dataToBackup));
  };
};

data.restore = function(dataToRestore) {
  if (dataToRestore) {
    if (dataToRestore.version != version.number) {
      // backup save data before running update
      data.backup(dataToRestore);
      // run update on save data
      dataToRestore = update.run(dataToRestore);
      // save data
      data.set(data.saveName, JSON.stringify(dataToRestore));
    } else {
      console.log('data version:', version.number, 'no need to run update');
    };
    // restore state and bookmarks from save data
    state.set.restore(dataToRestore);
    bookmark.restore(dataToRestore);
  } else {
    console.log('no data found to load');
    state.set.default();
  };
};

data.save = function() {
  data.set(data.saveName, JSON.stringify({
    [data.saveName]: true,
    version: version.number,
    state: state.get.current(),
    bookmark: bookmark.all
  }));
};

data.load = function() {
  if (data.get(data.saveName) != null && data.get(data.saveName) != undefined) {
    return JSON.parse(data.get(data.saveName));
  } else {
    return false;
  };
};

data.wipe = function() {
  data.remove(data.saveName);
  data.render.reload();
};

data.render = {};

data.render.reload = function() {
  location.reload();
};

data.render.clear = function() {
  const clearContent = node('div');

  const para1 = node('p:Are you sure you want to clear all ' + data.saveName + ' Bookmarks and Settings? ' + data.saveName + ' will be restore to the default state.');

  const para2 = node('p:This can not be undone.');

  clearContent.appendChild(para1);

  clearContent.appendChild(para2);

  modal.open({
    heading: 'Clear all ' + data.saveName + ' data?',
    content: clearContent,
    successAction: function() {
      data.wipe();
    },
    actionText: 'Clear all data',
    size: 'small'
  });

};

data.render.feedback = {
  empty: function(feedback) {
    feedback.appendChild(node('p:No JSON file selected.|class:muted small'));
  },
  success: function(feedback, filename, action) {
    feedback.appendChild(node('p:Success! Restoring ' + data.saveName + ' Bookmarks and Settings.|class:muted small'));
    feedback.appendChild(node('p:' + filename));
    if (action) {
      data.render.feedback.animation.set(feedback, 'is-pop', action);
    };
  },
  clear: function(feedback) {

    clearChildNode(feedback);

  },
  fail: {
    notJson: function(feedback, filename) {
      feedback.appendChild(node('p:Not a JSON file. Make sure the selected file came from ' + data.saveName + '.|class:small muted'));
      feedback.appendChild(node('p:' + filename));
      data.render.feedback.animation.set(feedback, 'is-shake');
    },
    notAppJson: function(feedback, filename) {
      feedback.appendChild(node('p:Not the right kind of JSON file. Make sure the selected file came from ' + data.saveName + '.|class:small muted'));
      feedback.appendChild(node('p:' + filename));
      data.render.feedback.animation.set(feedback, 'is-shake');
    }
  },
  animation: {
    set: function(feedback, animationClass, action) {
      feedback.classList.add(animationClass);

      const animationEndAction = function() {
        if (action) {
          action();
        };
        data.render.feedback.animation.reset(feedback);
      };

      feedback.addEventListener('animationend', animationEndAction);
    },
    reset: function(feedback) {
      feedback.classList.remove('is-shake');
      feedback.classList.remove('is-pop');
      feedback.classList.remove('is-jello');
      feedback.removeEventListener('animationend', data.render.feedback.animation.reset);
    }
  }
};

data.init = function() {
  data.restore(data.load());
};

export { data };
