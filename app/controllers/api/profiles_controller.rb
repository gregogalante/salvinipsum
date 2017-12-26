class Api::ProfilesController < Api::ApiController

  # Ritorna tutti i profili usati dal sistema
  def all
    profiles = Profile.all
    response = []
    profiles.each do |profile|
      response.push(JSON.parse(profile.to_json))
    end
    render json: response
  end

  def single
    profile = Profile.find(params[:id])
    render json: {error: 'profile id not valid'}, status: 400 and return false unless profile
    response = JSON.parse(profile.to_json)
    render json: response
  end

  # Funzione che genera l'url assoluto della immagine profilo
  private def attachment_url(file, style = :original)
    "#{request.protocol}#{request.host_with_port}#{file.url(style)}"
  end

end
