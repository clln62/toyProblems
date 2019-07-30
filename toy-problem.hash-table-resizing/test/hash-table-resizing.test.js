const makeHashTable = require('../src/hash-table-resizing')
const { expect } = require('chai')



describe('makeHashTable', function() {
  it('should exist', function() {
    expect(makeHashTable).to.exist
  });

  it('should be a function', function() {
    expect(makeHashTable).to.be.a('function')
  });

  it('should return a hash table', function() {
    const hashTable = makeHashTable();
    
    expect(hashTable).to.be.an('object')
  });

  it('should return different instances of hash tables each time', function() {
    const hashTable1 = makeHashTable();

    const hashTable2 = makeHashTable();
    
    // `makehashTable()` should create a new hash table object instance
    // everytime but it's not!
    expect(hashTable1).to.not.equal(hashTable2)
  });
});

describe('hashTable', function() {
  describe('#insert', function() {
    it('should exist as a method of hashtable instances', function() {
      const hashTable = makeHashTable();
      
      expect(hashTable).to.have.property('insert')
    });
    
    it('should take exactly two arguments. a key and a value', function() {
      const hashTable = makeHashTable();
      
      /**
       A Hash Table gets its awesomeness from associating data. It wouldn't be
       very useful if you just gave it data without any association.
       */
      expect(hashTable.insert).to.have.length(2)
    });

    it('should allow keys to be reinserted with new values', function() {
      const hashTable = makeHashTable();
      expect(() => {
        hashTable.insert('keanu reeves best movie', 'Bill & Ted\'s Excellent Adventure');
        hashTable.insert('keanu reeves best movie', 'The Matrix');
      }).to.not.throw()

    });
  });

  describe('#retrieve', function() {
    it('should be a method of hashTable instances', function() {
      const hashTable = makeHashTable();
      
      expect(hashTable).to.have.property('retrieve')
    });
    
    it('should be a function', function() {
      const hashTable = makeHashTable();
      
      expect(hashTable.retrieve).to.be.a('function')
    });
    
    it('should take exactly one argument', function() {
      const hashTable = makeHashTable();
      
      // the retrieve function should only take a single `key` argument
      // hashTable.retrieve.length.should.equal(1);
      expect(hashTable.retrieve).to.have.length(1)
    });
    
    it('should return values previously inserted', function() {
      const hashTable = makeHashTable();
      hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
      const value = hashTable.retrieve('William Shatner\'s most well known role');
      
      expect(value).to.equal('Captain Kirk')
    });
    
    it('should return undefined for unknown keys', function() {
      const hashTable = makeHashTable();
      
      expect(hashTable.retrieve('echo?')).to.not.exist
    });
  });

  describe('#insert', function() {
    it('should allow values to be updated', function() {
      const hashTable = makeHashTable();
      
      hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
      hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
      
      const value = hashTable.retrieve('Tarantino\'s best movie');
      
      expect(value).to.equal('Pulp Fiction')
    });
  });

  describe('#remove', function() {
    it('should exist as a method of the hashTable instance', function() {
      const hashTable = makeHashTable();
      
      expect(hashTable).to.have.property('remove')
    });
    
    it('should be a function', function() {
      const hashTable = makeHashTable();
      
      expect(hashTable.remove).to.be.a('function')
    });
    
    it('should take exactly one argument', function() {
      const hashTable = makeHashTable();

      // the remove function should only take a single `key` argument
      // hashTable.remove.length.should.equal(1);
      expect(hashTable.remove).to.have.length(1)

    });
    
    it('should allow values to be removed', function() {
      const hashTable = makeHashTable();
      hashTable.insert('Spielberg\'s best movie', 'Jaws');
      hashTable.remove('Spielberg\'s best movie');
      
      const value = hashTable.retrieve('Spielberg\'s best movie');
      
      expect(value).to.not.exist;
    });
  });

  describe('#insert', function() {
    it('should handle collisions', function() {
      const hashTable = makeHashTable();

      expect(() => {
        const n = 1000;
        for (let i = 0; i < n; i++) {
          hashTable.insert('userid:' + (i++), 'Jamie Hyneman');
        }
      }).to.not.throw()
    });
    it('should be able to resize', function() {
      // If your hashtable isn't resizing, its going to start running more
      // and more slowly with a large number of inserts and retrievals.
      const hashTable = makeHashTable();
      const n = 10;
      let id = 0;
      const diffs = [];
      let endTime;
      let startTime;
  
      for (let i = 0; i <= n; i++) {
        startTime = new Date();
        for (let j = 0; j < 1000; j++) {
          hashTable.insert('userid:' + (id++), 'Syd Mead');
        }
        for (let j = 0; j < 100; j++) {
          hashTable.retrieve('userid:' + Math.floor(Math.random() * i));
        }
        endTime = new Date();
        diffs.push(endTime - startTime);
      }
      const sum = function(arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
          total += arr[i];
        }
        return total;
      };
      
      // We should expect the first iteration to take up roughly 1 / n
      // of the total time. We give it some wiggle room by letting it be as
      // low as a 1 / (n*2) of the total duration.
      const ratio = (diffs[0] / sum(diffs));
      
      expect(ratio).to.be.greaterThan(1 / ( n * 2 ))
    });
  });
  
});