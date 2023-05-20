/* Taken from quick-encrypt package, which is not maintained anymore */

const crypto = require('crypto')

const acceptableBitSizes = [1024, 2048];

exports.generate = (sizeInBits) => {
  if (!acceptableBitSizes.includes(sizeInBits))
    throw Error('Error generating public and private key. Key size can only be 1024 or 2048. Example usage: ` let keys = QuickEncrypt.generate(2048); `')
  return keypair({ bits: sizeInBits })
}

exports.encrypt = (payloadString, publicKey) => {
  if (typeof payloadString !== 'string' || typeof publicKey !== 'string')
    throw Error("Error encrypting. Payload and Public Key should be in text format. Example usage: ` let encryptedText = QuickEncrypt.encrypt('Some secret text here!', 'the public RSA key in text format here'); ` ")
  return crypto.publicEncrypt(publicKey, Buffer.from(payloadString, 'utf8')).toString('hex')
}

exports.decrypt = (encryptedString, privateKey) => {
  if (typeof encryptedString !== 'string' || typeof privateKey !== 'string')
    throw Error("Error decrypting. Decrypted Text and Private Key should be in text format. Example usage: ` let decryptedText = QuickEncrypt.decrypt('asddd213d19jenacanscasn', 'the private RSA key in text format here'); ` ")
  return crypto.privateDecrypt({ key: privateKey }, Buffer.from(encryptedString, 'hex')).toString()
}
