class Lato::PhrasesController < Lato::LatoController

  # Valore indicante il numero di frasi per pagina
  @@pagination = 15

  # Imposto active menu
  before_action do
    view_setCurrentVoice('phrases')
  end

  def show
    redirect_to edit_lato_phrase_path(params[:id])
  end

  def index
    @search_phrases = Phrase.ransack(params[:q])
    @phrases = @search_phrases.result.paginate(page: params[:page], per_page: @@pagination).order('created_at DESC')
    session[:phrases_page] = params[:page]
  end

  def edit
    @phrase = Phrase.find(params[:id])
    # identifico possibili profili
    @profiles = Profile.all
  end

  def update
    phrase = Phrase.find(params[:id])
    if !phrase
      flash[:danger] = "Salvataggio non avvenuto"
      redirect_to lato_phrases_path and return false
    end

    if !phrase.update(phrase_params)
      flash[:danger] = "Salvataggio non avvenuto"
      redirect_to edit_lato_phrase_path(phrase.id) and return false
    end

    flash[:success] = "Salvataggio avvenuto correttamente"
    redirect_to lato_phrases_path
  end

  def destroy
    phrase = Phrase.find(params[:id])
    phrase.destroy

    flash[:success] = "Salvataggio avvenuto correttamente"
    redirect_to lato_phrases_path(page: session[:phrases_page])
  end

  # Imposta come controllate tutte le frasi della pagina ricevuta come parametro
  def check_page
    page = params[:page].to_i
    Phrase.all.order('created_at DESC').each_with_index do |phrase, index|
      if index < (@@pagination * page) && index >= (@@pagination * (page - 1))
        phrase.update(checked: true)
      end
    end
    redirect_to lato_phrases_path(page: page)
  end

  # Elimina tutte le frasi che non sono state impostate come controllate
  def destroy_not_checked
    Phrase.where(checked: false).each do |phrase|
      phrase.destroy
    end
    redirect_to lato_phrases_path
  end

end
