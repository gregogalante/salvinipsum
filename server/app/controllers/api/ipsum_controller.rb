class Api::IpsumController < Api::ApiController

  def text
    # dichiaro variabili base
    words = params[:words].to_i
    keys = params[:keys].split('-')
    content = ''
    content_words = 0
    finish = false
    errors = 0
    # controllo limite parole
    render json: {error: 'too many words'}, status: 400 and return false if words > 1000
    # trovo profilo
    profiles = Profile.where(key: keys)
    render json: {error: 'keys not valid'}, status: 400 and return false unless profiles
    # ciclo fino a completare
    while !finish
      # estraggo paragrafi utente
      paragraph = profiles.sample.paragraphs.sample
      render json: {error: 'no data for profile'}, status: 404 and return false unless paragraph
      # estraggo frase
      phrase = paragraph.phrases.sample
      next if !phrase
      # frase maggiore
      errors = errors + 1 if phrase.words_count > words
      # frase minore
      if phrase.words_count < words
        content = "#{content}#{phrase.print} "
        content_words = content_words + phrase.words_count
      end
      # contenuto minore
      next if content_words < words
      # contenuto maggiore
      if content_words > words
        errors = errors + 1
        content = ''
        content_words = 0
      end
      # contenuto uguale
      finish = true if content_words === words
      # gestione errori
      finish = true if errors > 500
    end
    # ritorno il risultato
    render json: content
  end

end
